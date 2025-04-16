from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from googletrans import Translator

app = FastAPI()

# CORS ayarları
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str
    target_lang: str  # örnek: 'en' veya 'tr'

translator = Translator()

@app.post("/translate")
def translate_text(request: TextRequest):
    translated = translator.translate(request.text, dest=request.target_lang)
    return {"translated_text": translated.text}
