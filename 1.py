import speech_recognition as sr
from gtts import gTTS
import pygame

recognizer = sr.Recognizer()


pygame.mixer.init()

ar = []
with sr.Microphone() as source:
    print("Please speak something...")
    recognizer.adjust_for_ambient_noise(source)  
    audio = recognizer.listen(source)  


try:
    text = recognizer.recognize_google(audio)
    print("You said: " + text)
    ar.append(text)
    
    
    response_text = "You said: " + text
    
    
    response_tts = gTTS(response_text)
    response_tts.save("response.mp3")

    
    pygame.mixer.music.load("response.mp3")
    pygame.mixer.music.play()

    
    while pygame.mixer.music.get_busy():
        pass

except sr.UnknownValueError:
    print("Sorry, I could not understand your speech.")
except sr.RequestError as e:
    print("Error: {0}".format(e))
print(ar)
