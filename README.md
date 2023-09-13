# Node.JS + MongoDB egzaminas

## Užduotis

Sukurti REST API, naudojant Node.js, Express.js ir MongoDB, kuris teikia informaciją apie vartotojus.

Įsivaizduokite, kad jūsų įmonė jau turi REST API "endpoint" arba "route", kuris grąžina išsamesnę informaciją apie vartotojus (https://prnt.sc/1v663x5). Jūs pastebėjote, kad dažnai ši informacija yra perteklinė ir ne visada naudojama. Todėl nuspręsite turėti savo vartotojų duomenų bazę (`users_db`), kurioje laikysite duomenis apie vartotojus (duomenų modelis: `_id`, `name`, `email`, `address`), ir naudosite vartotojus, kurie gaunami iš šaltinio https://jsonplaceholder.typicode.com/users. Taigi, atsirado poreikis sukurti penkias naujas "endpoints" (arba "routes"), kurie:

1. Kreipsis į šaltinį https://jsonplaceholder.typicode.com/users ir į `users_db`, apdoros informaciją ir grąžins:

   - GET - /api/users/names - masyvą su vartotojais, kurie bus objekte ir jame bus matomi vartotojo ID ir vardas.
   - GET - /api/users/emails - masyvą su vartotojais, kurie bus objekte ir jame bus matomi vartotojo ID, vardas ir el. paštas.
   - GET - /api/users/address - masyvą su vartotojais, kurie bus objekte ir jame bus matomas vartotojo ID, vardas ir pilnas adresas (gatvė ir miestas kaip vienas tekstas).

2. Jūsų duomenų bazėje `users_db`:
   - POST - /api/users - įrašys vartotojus (`name`, `email`, `address`).
   - GET - /api/users - grąžins vartotojus (`_id`, `name`, `email`, `address`).

## Paleidimo instrukcijos

Norėdami paleisti šį projektą, atlikite šiuos žingsnius:

1. Įsitikinkite, kad jūsų kompiuteryje yra įdiegta Node.js ir MongoDB.
2. Nusiklonuokite šį projektą į savo kompiuterį naudodami `git clone`.
3. Naviguokite į projekto aplanką komandinėje eilutėje.
4. Įvykdykite šias komandas, norėdami įdiegti projektui reikalingas priklausomybes:
   > npm install
5. Sukurkite failą `.env` projekto pagrindiniame aplanke ir nurodykite savo MongoDB prisijungimo URL, pvz.:
   > MONGO_DB_URL=mongodb://localhost:27017/mydb
6. Paleiskite serverį:
   > npm start
7. Serveris bus paleistas ir pasiekiamas adresu `http://localhost:3000`.
8. Dabar galite naudoti API endpoints, kaip aprašyta aukščiau, pavyzdžiui:

- GET `http://localhost:3000/api/users/names`
- GET `http://localhost:3000/api/users/emails`
- GET `http://localhost:3000/api/users/address`
- POST `http://localhost:3000/api/users`

## Paleidimas ir Testavimas

Norėdami paleisti ir išbandyti šį projektą, galite naudoti Postman, įimportavę kolekciją iš [test/NodeJS_exam.postman_collection.json](NodeJS_exam.postman_collection.json). Ši kolekcija jau apibrėžia testus šiems API "endpoints":

1. **Add new user** - Sukuria naują vartotoją naudodama POST užklausą į `/api/users`. Kad galėtumėte pritaikyti šį testą, galite pakeisti JSON duomenis pagal savo poreikius.
2. **All users** - Gauna visus vartotojus naudodama GET užklausą į `/api/users`.
3. **New users** - Gauna naujus vartotojus naudodama GET užklausą į `/api/users/new`.
4. **Users names** - Gauna vartotojų vardus naudodama GET užklausą į `/api/users/names`.
5. **Users emails** - Gauna vartotojų el. paštus naudodama GET užklausą į `/api/users/emails`.
6. **Users address** - Gauna vartotojų adresus naudodama GET užklausą į `/api/users/address`.

Prieš naudodami Postman testus, užtikrinkite, kad serveris yra paleistas ir pasiekiamas adresu `http://localhost:3000`.

**Pastaba:** Norint sėkmingai paleisti šiuos testus, pirmiausia turite užtikrinti, kad serveris veikia ir gali priimti užklausas.
