/*

CRUD - GET, DELETE, PUT, POST ska vara med

GET hämtar
POST lägger till
PUT uppdaterar
DELETE tar bort

APIet ska hanetera en resurs --> matprodukter?
Varje "produkt" objekt ska ha minst 4 egenskaper, varav en är 'id'

Data ska sparas lokalt i serverfilen
Data kan vara en array av produkt-objekt

Testa API med REST Client

G-krav:
1. Innehåller minst 4 endpoints, GET/PUT/POST/DELETE
2. Samtliga endpoint ska nås med REST Client
3. Data som APIet hanterar sparas lokalt i serverfilen
4. Git & github används
5. README.md fil (titel, proj.beskrivning, vilka krav som är uppfyllda, info om hur projektet byggs och körs)
6. Lämnas in i tid!

VG-krav:
1. G.krav är uppfyllda
2. All data sparas i JSON-fil ist för i serverfilen
    - Skapa JSON-fil med array - KLAR
    - Koppla JSON-fil till server.js filen - X
3. Datan i JSON-filen ska uppdateras då något läggs till, uppdateras eller tas bort
4. Ett simpelt klientgränssnitt ska finnas för att anropa APIets olika endpoints, samt visa resultatet av ett GET-anrop
    - Anropa GET för alla objekt och skriva ut dessa - X
    - Anropa POST och se nytt objekt eller alla objekt i array inkl nytt - X
    - Anropa PUT och få ut alla objekt med uppd objekt pris - X
    - Anropa DELETE och skriv ut vilket objekt som tagits bort - X
5. Ytterligare en GET-endpoint ska läggas till där det går att hämta ett specifikt objekt
    - KLAR

*/