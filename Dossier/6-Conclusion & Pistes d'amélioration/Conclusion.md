# Conclusion après la réalisation du projet

## Le bon de notre projet

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nous avons su mettre en place une application web locale répondant à nos objectifs principaux. Par cela j'entends la création d'une interface épurée et simple d'utilisation pour tout le monde. Les couleurs et le fond matchent bien avec notre sujet et plongent l'utilisateur directement dedans. De plus nous offrons la possibilité de choisir le pays entier, une région ou un département en un clique concernant l'affichage de la carte. Finalement, l'affichage des informations à droite est intuitif notamment grâce à une disposition scrollable et un code couleur indiquant la sévérité de la donnée (vert-positif; jaune-médiocre; rouge-négatif).

## Les défauts actuels

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ce qui pourrait faire défaut à notre site actuellement est le fait que ce soit uniquement basé sur le visuel et le frontend. En effet, les cartes informatives à droite sont génériques et identiques puisqu'il est pour l'instant impossible de sélectionner une zone. La carte n'est pas cliquable et la fonction "rechercher" n'est pas utilisable. Toutefois, il s'agissait simplement pendant ce hackathon de réaliser un POC donc nous ne savons si ces points s'imposent réellement comme des lacunes.

## Les améliorations prévues

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A terme, nous souhaitons apporter un affichage dynamique personnalisant chaque information pour chaque zone et tout ça en temps réel. Nous implémenterons donc une partie backend afin de réaliser des requêtes GET. Celle-ci récupérerons les données à partir des API des sites sources (ecologie.data.gouv.fr, ATMO France, ADEME, INSEE). Ensuite, le frontend appelera le backend pour extraire les informations et les afficher dynamiquement sur le site. La deuxième chose pouvant être très pertinente serait d'agrandir la vignette lorsque l'utilisateur cliquera dessus. De cette façon nous afficherons davantage d'informations et de précisions à la catégorie sélectionnée. Finalement, nous rendrons fonctionnels les défauts cités ci dessus notamment pour choisir une zone en cliquant sur la carte ou en la recherchant.