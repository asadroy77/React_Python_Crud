from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from typing import Union

from pydantic import BaseModel

class User(BaseModel):
    name:str
    password:str

app = FastAPI()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

allusers = []

@app.post("/signingup")
async def create_user( user: User): 
    print(user)
    allusers.append(user)
    return {"message":"Successfully created user"}

@app.post("/logingin")
async def login( user: User):
    print("runninf")
    if(user in allusers):
        return user
    else:
        return {"message":"unable to log in"}



@app.get("/get")
async def fetchusers() :
    return allusers