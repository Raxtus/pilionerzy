# Pilionerzy

## konfiguracja
docker-compose.yml musi zosatć uzupełniony o `<token>` z cloudflared

## informacje
Program nie jest bezpieczny i nie sprawdza praw dostępu
Jeżeli zostanie to poprawione ta informacja się zmieni.

## Uruchomienie
`docker-compose up -d`
## Zatrzymanie
`docker-compose down`

## Struktura
api : background - odpowiada za komunikację między graczami, widownią, a grą
elimination - tylko dla graczy
vote - dla wszystkich

## Gra zostanie udostępniona za niedługo
