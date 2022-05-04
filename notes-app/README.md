# Notes CLI

| Commands      | Description    |
| ------------- | -------------- |
| app.js add    | Add a new note |
| app.js remove | Remove a note  |
| app.js list   | List the notes |
| app.js read   | Read a note    |

# Examples
When you use the add command providing title and body, you create a new note. Note below:
```shell
node app.js add --title="Shopping List" --body="[ ] Apples\n [ ] Milk\n [ ] Meat"
New note added!
```


When you use the remove command providing a title, you remove a note. Note below:
```shell
node app.js remove --title="Shopping List"
Note removed!
```


When you use the list command, you can see all the note titles. Note below:
```shell
node app.js list
Your notes
• Shopping List
• Goals
```


When you use the read command, you can see a note content. Note below:

```shell
node app.js read --title="Goals"
Goals
[X] Improve my english
[X] Reinforce knowledge]
[ ] Find a international opportunity
```
