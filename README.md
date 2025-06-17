# 🗂️ Kanban Task Management App

Eine webbasierte **Kanban-App** zur Verwaltung von Aufgaben mit responsivem UI, Subtasks, Priorisierung und Kontaktzuweisung.

## 🚀 Features

- Aufgaben erstellen, verschieben, löschen
- Drag & Drop zwischen Spalten (To Do, In Progress, Done)
- Priorisierung (Low, Medium, Urgent)
- Kontaktverwaltung mit Auswahl über Dropdown
- Subtasks mit Fortschrittsanzeige
- Responsive UI (mobil & Desktop)
- Echtzeit-Datenverwaltung über **Firebase**

## 🛠️ Technologien

- HTML, CSS & Vanilla JavaScript
- Firebase Realtime Database
- Designvorlage: **Developer Akademie**
- Keine externen Frameworks (React, Vue, etc.)

## 🗃️ Datenstruktur (Firebase)

Die App verwendet folgende Collections in Firebase:

- `/contacts`: gespeicherte Kontakte (Name, Farbe)
- `/tasks`: Aufgabenobjekte mit Titel, Beschreibung, Due Date, Priorität, Subtasks, etc.

## 📁 Projektstruktur (Auszug)

📁 js/
├── add_task.js
├── add_task_support.js
├── board.js
├── board-overlay.js
├── firebase.js
├── ...
📁 css/
├── style.css
📁 assets/
├── img/
├── icons/
📄 index.html
📄 board.html
📄 add_task.html

yaml
Kopieren
Bearbeiten

## 👥 Autoren

Dieses Projekt wurde im Rahmen der Developer Akademie erstellt von:

- **Benjamin Rieck**
- **Max Mischner**
- **Stephan Gilles**
- **Xin Yang**

## 📌 Lizenz

Dieses Projekt ist nicht lizenziert für kommerzielle Nutzung. Nur für Ausbildungszwecke bestimmt.

---

