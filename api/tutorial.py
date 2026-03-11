# importing sub library from curses library
import curses
from curses import wrapper
import time
import random

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import random
import os

# Create FastAPI object first
app = FastAPI()

# Absolute paths for serverless environment for VERCEL deployment
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")

# Mount static files and templates
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Load random text
def load_text():
    with open("text.txt", "r") as f:
        lines = f.readlines()
    return random.choice(lines).strip()

# API endpoint for text
@app.get("/get-text")
def get_text():
    return {"text": load_text()}

# Serve index.html
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# initial screen basics methods
def start_screen(stdscr):
    stdscr.clear() 
    
    stdscr.addstr("Welcome to Speed Typing Test!")
    stdscr.addstr("\nPress any key to Start...") 
    
    stdscr.refresh() #refreshes instantly after showing output in terminal
    stdscr.getkey() #is used to hold the refresh, with this it will refresh on pressing key not automatically after o/p
    
    
    
def display_text(stdscr, target, current, wpm=0):
    stdscr.addstr(target)
    stdscr.addstr(3, 0, f"WPM: {wpm}") # shows word count on second line

    for i, char in enumerate(current):

        if i >= len(target): # Prevent crashing if the user types more characters than the target text
            break

        correct_char = target[i]
        color = curses.color_pair(1)  # green

        if char != correct_char:
            color = curses.color_pair(2)  # red

        stdscr.addstr(0, i, char, color)
 
    

# wpm method having the user type based functions
def wpm_test(stdscr):
    target_text = load_text()
    current_text = []
    wpm = 0
    
    start_time = time.time()
    stdscr.nodelay(True)
    
    stdscr.clear() # clears screen
    
    while True:  
        elapsed_time = max(time.time() - start_time, 1) #avoids zero DIV error 
        
        wpm = round((len(current_text) / (elapsed_time / 60)) / 5)  # 5 assuming a word so CPM over WPM0
                                                                    # roundoff to whole number instead of decimals
        
        stdscr.clear()      
        display_text(stdscr, target_text, current_text, wpm) 
        stdscr.refresh()
            
        if "".join(current_text) == target_text:
            stdscr.nodelay(False)
            break 
            
        try:   #usually blocks WPM count when user isnt typing, now it won't cuz of *stdscr.nodelay(True)*     
            key = stdscr.getkey() 
        except:
            continue    
    
        if ord(key) == 27:  #ESC key ASCII is 27 so hitting ESC will end program
            break
        
        if key in ("KEY_BACKSPACE", '\b', '\x7f'): # alter backspace to actually backspace rather than hovering with cursor
         if len(current_text) > 0:
            current_text.pop()
        elif len(current_text) < len(target_text):
         current_text.append(key)
                


#main method, having the cursor colors FG and BG color
def main(stdscr):
    curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)
    curses.init_pair(2, curses.COLOR_RED, curses.COLOR_BLACK)
    curses.init_pair(3, curses.COLOR_WHITE, curses.COLOR_BLACK) #int is the id, foreground color, bg stoke color
  
    start_screen(stdscr)
    
    # End/Continue game loop
    while True:
        wpm_test(stdscr)
        stdscr.addstr(4, 0, "Congratulations you finished the text! Press any key to Start again or Esc key to Exit....")
        key = stdscr.getkey()
        
        if ord(key) == 27:
            break

if __name__ == "__main__":
    wrapper(main)
