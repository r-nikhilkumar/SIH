from sklearn.linear_model import LinearRegression,LogisticRegression
from sklearn.tree import DecisionTreeClassifier 
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import matplotlib.pyplot as plt
from gtts import gTTS
import pygame
import numpy as np
import os
import seaborn as sb
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix,classification_report,accuracy_score
from sklearn.preprocessing import StandardScaler
pygame.mixer.init()
response_directory = "responses/"

# Create the directory if it doesn't exist
if not os.path.exists(response_directory):
    os.makedirs(response_directory)
def tts():
    with sr.Microphone() as source:
        print("Waiting for your response...")
        recog.adjust_for_ambient_noise(source)
        aud = recog.listen(source, timeout=5)
        return aud
arr = []

def listen(m, i):
    response_tts = gTTS(m)
    question_filename = os.path.join(response_directory, f"question_{i}.mp3")
    response_tts.save(question_filename)
    

    
    pygame.mixer.music.load(f"responses/question_{i}.mp3")
    pygame.mixer.music.play()

    
    while pygame.mixer.music.get_busy():
        pass
    
    try:
        print("Waiting for your response...")
        # with sr.Microphone() as src:
           
        #     rec.adjust_for_ambient_noise(source=src)
        #     aud = rec.listen(source=src)
        # text = rec.recognize_google(audio_data=aud)
        text = input()
        text = text.lower()
        if("yes" in text):
            arr.append(1)
        elif("high" in text):
            arr.append(1)
        elif("low" in text):
            arr.append(1)
        elif("normal" in text):
            arr.append(2)
        elif("no" in text):
            arr.append(0)
        elif("male" in text or "mel" in text):
            arr.append(1)
        elif("female" in text):
            arr.append(0)
        else:
            arr.append(int(text))
        # print(text)
    except sr.UnknownValueError:
        listen(m,i)
    except sr.RequestError as e:
        listen(m,i)
    

data = pd.read_csv("disease.csv")

s = {"Fever":{"Yes":1,"No":0},"Cough":{"Yes":1,"No":0},"Fatigue":{"Yes":1,"No":0},"Difficulty Breathing":{"Yes":1,"No":0},"Gender":{"Male":1,"Female":0},"Blood Pressure":{"Low":0, "High":1,"Normal":2},"Cholesterol Level":{"Low":0, "High":1,"Normal":2}}
data.replace(s, inplace=True)
data = data.drop(data[data['Outcome Variable'] == 'Negative'].index)
data.drop("Outcome Variable", axis=1, inplace=True)
ar1 = data.columns
ar = ar1[1:]
print(ar)
# recog = sr.Recognizer()
X = data.drop("Disease",axis=1)
Y = data["Disease"]

x_train,x_test,y_train,y_test = train_test_split(X,Y,train_size=0.8,random_state=2)
model = DecisionTreeClassifier()
model.fit(x_train,y_train)

# engine = pyttsx3.init()
for i in range(len(ar)):
    if(i+1<5):
        m = "Do you have "+ar[i]+"?"
    elif(ar[i]=="Age" or ar[i]=="Gender"):    
        m = "What is your "+ar[i]+"?"
    else:
        m = "Is your "+ar[i]+" is high, normal or low?"
    print(m)
    listen(m,i)
    
arr = np.array([arr])
# x = np.array([[0,1yes
# ,1,0,21,1,1,1]])

y_pred = model.predict(arr)
# print(accuracy_score(y_test,y_pred))
# print(confusion_matrix(y_test,y_pred))
print(y_pred)
t = "You have "+y_pred[0]+" disease"
response_tts1 = gTTS(t)
response_tts1.save("response.mp3")


pygame.mixer.music.load("response.mp3")
pygame.mixer.music.play()

while pygame.mixer.music.get_busy():
    pass