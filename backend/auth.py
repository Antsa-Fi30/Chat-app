porte_monnaie = int(input("Entrer porte_monnaie: "))
produit = 501212

achat = porte_monnaie - produit

print("Vous avez acheté une produit de : " + str(produit))
if achat < 0:
    print("Votre nouvelle valeur de P.M est : " + str(achat))
else:
    print("Votre nouvelle valeur de P.M est : " + str(achat))

