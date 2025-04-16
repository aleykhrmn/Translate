import subprocess
import time
import os

# Frontend başlatma fonksiyonu
def start_frontend():
    print("Frontend başlatılıyor...")
    frontend_path = os.path.join(os.getcwd(), "frontend")
    subprocess.Popen(["npm", "start"], cwd=frontend_path, shell=True)

# Backend başlatma fonksiyonu
def start_backend():
    print("Backend çalıştırılıyor...")
    backend_path = os.path.join(os.getcwd(), "backend")
    subprocess.Popen(["uvicorn", "main:app", "--reload"], cwd=backend_path, shell=True)

# Ana fonksiyon
def main():
    # Backend ve frontend'i başlat
    start_backend()
    time.sleep(2)  # Backend biraz önde başlasın diye
    start_frontend()
    print("Uygulama başlatıldı. Tarayıcınızdan frontend arayüzüne ulaşabilirsiniz.")

if __name__ == "__main__":
    main()
