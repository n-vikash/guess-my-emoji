Guess The Emoji – JavaScript Mini Game

An interactive JavaScript browser game where the player must guess the correct emoji from a collection within a limited number of chances.

The game demonstrates DOM manipulation, random selection, conditional logic, and user interaction using JavaScript.

Game Concept

    The application randomly selects one emoji from a displayed emoji collection.
    
    The player must identify and enter the correct emoji within the given number of chances.
    
    If the player guesses correctly, the game shows a success message with accuracy feedback and the background turns green.
    
    If the player uses all chances without finding the correct emoji, the game displays an "Out of Chances" message and the background turns red.

Difficulty Levels

    The game includes three difficulty levels that control the number of emojis and the chances available.

          Level	Emojis Displayed	Chances
          Easy	5 emojis	3 chances
          Normal	7 emojis	2 chances
          Hard	10 emojis	2 chances
      Easy Level
  
        The player must find the correct emoji among 5 emojis with 3 chances.
  
      Normal Level
  
        The player must find the correct emoji among 7 emojis with 2 chances.
  
      Hard Level
  
        The player must find the correct emoji among 10 emojis with 2 chances.

⚙️ Game Logic

    The game works with the following logic:
    
    The player selects a difficulty level.
    
    A collection of emojis is displayed based on the level.
    
    JavaScript randomly selects one emoji as the target.
    
    The player types the guessed emoji in the input box.
    
    The player presses Check.
    
    The program compares the guess with the target emoji.

    If Correct
    
        Appreciation message appears.
        
        Accuracy is calculated based on remaining chances.
        
        Background color changes to green.
    
    If Incorrect
    
        Remaining chances decrease.
        
        The player can try again until chances reach 0.
    
    If Chances Become 0
    
        The game ends.
        
        Background color changes to red.
        
        An Out of Chances message appears.
Technologies Used

    HTML – Structure of the game interface
    
    CSS – Styling and layout
    
    JavaScript – Game logic and interactivity

Interface Preview

Below are examples of the game interface.

Game Interface

<img width="1919" height="903" alt="game_interface" src="https://github.com/user-attachments/assets/1bd5b459-fe44-4bd7-b08b-ea26d5725621" />

Difficulty Levels

EASY

<img width="1917" height="906" alt="LEVEL_EASY" src="https://github.com/user-attachments/assets/db66f390-a7a3-4624-bad8-ed4dec65f852" />

NORMAL

<img width="1919" height="909" alt="LEVEL_NORMAL" src="https://github.com/user-attachments/assets/57047eaf-d150-474c-8bf8-9ee59cc2465e" />

HARD
<img width="1919" height="899" alt="LEVEL_HARD" src="https://github.com/user-attachments/assets/26f3f8ea-b06c-46b9-9a77-791559bee592" />


Gameplay

IF YOUR CHOOSE CORRECT EMOJI

<img width="1919" height="910" alt="CRCT_EMOJI" src="https://github.com/user-attachments/assets/3730b82d-ed4d-4587-a933-dffd60f2c9f8" />

IF YOUR OUT OF CHANCES

<img width="1919" height="913" alt="WRONG_EMOJI" src="https://github.com/user-attachments/assets/8479199d-bdcc-4f5d-a281-6f25f02dcf8a" />


