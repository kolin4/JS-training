Przedmioty

Podstawowym elementem z jakim mamy do czynienia jest obiekt reprezentujący przedmiot. Każdy przedmiot posiada minimum dwa atrybuty: ‘name’ (nazwa), ‘weight’(waga), nazwa jest ciągiem znaków a waga jest liczbą liczbą rzeczywistą, większą od zera.
Dodatkowo każdy obiekt typu przedmiot, powinien zawierać funkcję:
         showInfo() – funkcja wypisuje na konsolę informacje o przedmiocie w następujący sposób:
                      „Name:” nazwa przedmiotu, „Weight:” waga przedmiotu. 

1.Napisać funkcję createItem(n,w) która dla podanych parametrów, zwróci nam obiekt reprezentujący przedmiot o wartościach: name: n i weight:w. Należy weryfikować że waga i nazwa są prawidłowe.
2.Napisać funkcję createItems(number,minw, maxw) która zwróci tablicę n losowo wygenerowanych przedmiotów (gdzie n ma wartość number), przy założeniach że:
·         waga przedmiotu jest losową liczbą rzeczywistą z przedziału [minw,maxw].

·         nazwa jest to losowy ciąg znaków o długości z przedziału [5,10], dozwolone znaki to a-z (tylko małe litery)

  Należy weryfikować poprawność danych (number>0, 0<minw<maxw)
 
Plecaki
plecak jest specyficznym przedmiotem, oprócz atrybutów przedmiotu(‘name’,’weight’) zawiera także dwa dodatkowe atrybuty: ‘compression’,’items’, ‘size’. 
Atrybut ‘compression’ jest to liczba całkowita z przedziału [0,100] definiująca możliwości pakowania przedmiotów do plecaka. 
Atrybut ‘items’ jest to tablica, zawierająca przedmioty znajdujące się w plecaku. 
Atrybut ‘size’ jest to liczba naturalna z przedziału (0,100 000 000] określająca maksymalną ilość przedmiotów jakie można włożyć do plecaka.
Atrybut weight: waga plecaka jest wyliczana na podstawie wagi jego wszystkich przedmiotów, z założeniem że waga przedmiotu w plecaku jest to waga przedmiotu uwzględniająca atrybut ‘compression’ w następujący sposób: waga plecaka = waga przedmiotu*compression/100.
Przykład, dla plecaka zawierającego jeden element o wadze 100, i wartości ‘compression’ 10, waga plecaki wynosi 10. (100*10/100), dla compression wynoszącego 100, waga wyniesie 100.
czyli cały plecak waży tyle ile jego wszystkie przedmioty *compression /100.
 
Obiekt plecaka powinien też posiadać 4 funkcje:
·         add( items) – funkcja dodaję do plecaka przedmioty przekazane w parametrze items. Zakładamy że items to tabela przedmiotów (może być oczywiście pusta, wtedy nic nie jest dodawane).

·         makeEmpty() = funkcja usuwa wszystkie przedmioty z plecaka.

·         remove(index) – funkcja pozwala na usunięcie przedmiotu o podanym indeksie (o ile istnieje)

·         showInfo() – wyświetla w konsoli dane o plecaku: w postaci:
„Backpack: „ nazwa plecaka
„Current size:” + ilość elementów w plecaku
„Max size” : maksymalny rozmiar plecaka
„Weight” : waga plecaka,
„Compression” : wartość atrybutu compression

·         showDetails() – wyświetla w konsoli informację o elementach w plecaku w postaci:
„Backpack:” nazwa plecaka,
„Items: „
Lista przedmiotów w plecaku, każda linia powinna zawierać jeden wpis w postaci:
„Item:” indeks w tablicy, „Name:”  nazwa przedmiotu , „Weight:”  waga przedmiotu.


Przykładowo:

Mając obiekt plecaka bp1, o nazwie Aaa:
bp1.showInfo():
Backpack: Aaa
Current size: 1
Max size: 10000
Weight: 10
Compression: 10

 

bp1.showDetails():

Backpack: Aaa

Items:

Item 0, Name: a, Weight: 100

 

 

3 . napisać funkcję createBackpack (name, size, compression, items) która pozwoli tworzyć obiekt plecaka. Parametry w funkcji definiują wartość atrybutów, z uwagą na ostatni parametr items:

·         jeśli nie jest przekazany, tworzymy pusty plecak,

·         jeśli jest przekazany, to jest to tablica przedmiotów, i wtedy dodać te przedmioty do plecaka, przeliczając wagę plecaka, (dodajemy tylko tyle przedmiotów ile się zmieści w plecaku)

Funkcja zwraca nam obiekt plecaka (spełniające wszystkie ww kryteria).
