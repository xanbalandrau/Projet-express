# Projet Express & MongoDB <--!-- Bien lire la documention>

Ce projet couvre les concepts de base d'Express.js et Mongoose, et permet de comprendre comment créer un serveur, gérer une base de données MongoDB et implémenter des fonctionnalités d'authentification. Les exercices augmentent progressivement en difficulté, en allant de la configuration du serveur à la gestion des utilisateurs avec authentification et validation.

## Table des matières

- [Projet Express \& MongoDB \<--!-- Bien lire la documention\>](#projet-express--mongodb------bien-lire-la-documention)
  - [Table des matières](#table-des-matières)
  - [Exercice 1 : Configuration du serveur Express et connexion MongoDB](#exercice-1--configuration-du-serveur-express-et-connexion-mongodb)
  - [Exercice 2 : Définir un modèle Mongoose pour un utilisateur](#exercice-2--définir-un-modèle-mongoose-pour-un-utilisateur)
  - [Exercice 3 : Ajouter un nouvel utilisateur via une API POST](#exercice-3--ajouter-un-nouvel-utilisateur-via-une-api-post)
  - [Exercice 4 : Afficher tous les utilisateurs avec un endpoint GET](#exercice-4--afficher-tous-les-utilisateurs-avec-un-endpoint-get)
  - [Exercice 5 : Mise à jour des informations d'un utilisateur](#exercice-5--mise-à-jour-des-informations-dun-utilisateur)
  - [Exercice 6 : Suppression d'un utilisateur](#exercice-6--suppression-dun-utilisateur)
  - [Exercice 7 : Authentification de l'utilisateur avec un token JWT](#exercice-7--authentification-de-lutilisateur-avec-un-token-jwt)
  - [Exercice 8 : Vérification du token JWT pour protéger les routes](#exercice-8--vérification-du-token-jwt-pour-protéger-les-routes)
  - [Exercice 9 : Ajouter un champ `role` à l'utilisateur et vérifier les autorisations](#exercice-9--ajouter-un-champ-role-à-lutilisateur-et-vérifier-les-autorisations)
  - [Exercice 10 : Mise en place de la gestion des erreurs et validation des entrées](#exercice-10--mise-en-place-de-la-gestion-des-erreurs-et-validation-des-entrées)

---

## Exercice 1 : Configuration du serveur Express et connexion MongoDB

**Énoncé** : Créez une application Express de base et connectez-la à une base de données MongoDB en utilisant Mongoose. L'application doit afficher "Hello, World!" lorsqu'un utilisateur accède à la racine du site.

---

## Exercice 2 : Définir un modèle Mongoose pour un utilisateur

**Énoncé** : Créez un modèle Mongoose pour un utilisateur avec les propriétés suivantes :

- `name` (String, obligatoire)
- `email` (String, unique et obligatoire)
- `password` (String, obligatoire)
- `createdAt` (Date, valeur par défaut à la date actuelle)

---

## Exercice 3 : Ajouter un nouvel utilisateur via une API POST

**Énoncé** : Créez un endpoint `POST /register` qui permet d'ajouter un nouvel utilisateur dans la base de données. L'utilisateur doit fournir `name`, `email` et `password` dans la requête.

---

## Exercice 4 : Afficher tous les utilisateurs avec un endpoint GET

**Énoncé** : Créez un endpoint `GET /users` qui récupère et renvoie tous les utilisateurs de la base de données. Assurez-vous que les données sont renvoyées au format JSON.

---

## Exercice 5 : Mise à jour des informations d'un utilisateur

**Énoncé** : Créez un endpoint `PUT /users/:id` qui permet de mettre à jour les informations d'un utilisateur en fonction de son ID. L'utilisateur peut modifier son `name` ou `password`.

---

## Exercice 6 : Suppression d'un utilisateur

**Énoncé** : Créez un endpoint `DELETE /users/:id` qui permet de supprimer un utilisateur de la base de données en fonction de son ID.

---

## Exercice 7 : Authentification de l'utilisateur avec un token JWT

**Énoncé** : Implémentez un endpoint `POST /login` permettant à un utilisateur de se connecter avec son `email` et `password`. Si l'utilisateur existe et que le mot de passe est correct, générez un token JWT et renvoyez-le à l'utilisateur. Utilisez la bibliothèque `jsonwebtoken` pour générer le token.

---

## Exercice 8 : Vérification du token JWT pour protéger les routes

**Énoncé** : Créez un middleware qui vérifie si un token JWT est présent dans l'en-tête de la requête. Si le token est valide, autorisez l'accès à la route protégée ; sinon, renvoyez une erreur "Unauthorized".

---

## Exercice 9 : Ajouter un champ `role` à l'utilisateur et vérifier les autorisations

**Énoncé** : Ajoutez un champ `role` au modèle de l'utilisateur, qui peut être "user" ou "admin". Créez un middleware qui vérifie si l'utilisateur connecté a le rôle "admin" avant de lui permettre d'accéder à certaines routes protégées.

---

## Exercice 10 : Mise en place de la gestion des erreurs et validation des entrées

**Énoncé** : Implémentez une gestion des erreurs globale pour votre application Express. Assurez-vous que toutes les erreurs, comme les erreurs de validation des entrées, sont capturées et renvoyées au client sous forme de réponses structurées. Utilisez une bibliothèque comme `express-validator` pour valider les entrées des utilisateurs (par exemple, valider l'email et le mot de passe).

---
