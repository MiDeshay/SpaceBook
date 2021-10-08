![alt text](https://github.com/MiDeshay/SpaceBook/blob/master/Readme%20pics/Screen%20Shot%202021-10-08%20at%2010.07.28%20AM.png)

Spacebook is a simple social media app in which users send posts and interact with other users.



Some key features include to create and edit an account, the ability to create and edit posts with images, and the ability friend other users


![alt text](https://github.com/MiDeshay/SpaceBook/blob/master/Readme%20pics/Screen%20Shot%202021-10-08%20at%2010.19.03%20AM.png)


This project uses Rails on Routes to maintain its database and serve information and use React Redux to present content to the user in a single page web application format.


One of the big features of this app is its edit user page which lets the user personalize their accout with a profile picture, background, and other public information.

![alt text](https://github.com/MiDeshay/SpaceBook/blob/master/Readme%20pics/Screen%20Shot%202021-10-08%20at%2010.18.16%20AM.png)

Some of the biggest challenges in creating this feature were the many different modals and pop up menus that appear to allow the user to fill in certian fields. Specifically, creating modals was a frequent task involved with the create of this page. An overall strong eagerness to learn new CSS techniques to address each individual challenge was my primary means of completing this feature. 


![alt text](https://github.com/MiDeshay/SpaceBook/blob/master/Readme%20pics/Screen%20Shot%202021-10-08%20at%2010.21.06%20AM.png)
Additionally, the ability to add and edit picture and comments are important features. Binding comments to the React state to help keep track of which comment belongs to which post was an pleasent solution to dealing with comments through other means.

While making this project there a few code snippets that allowed me solve problems relating to the React life cycle. 
```
componentDidUpdate(){
        this.user = this.props.users[this.props.match.params.userId]
        if (this.user){
            let swtiched = false
            this.props.friends.map((relation) => {
                if (relation.userId == this.user.id && relation.friendId ==  this.props.currentUser.id ||
                    relation.userId == this.props.currentUser.id && relation.friendId ==  this.user.id){
                    document.getElementById("remove-friend").style.display = "block";
                    document.getElementById("add-friend").style.display = "none";
                    swtiched = true
                } 
            })
            
```
In the snippet above, I used the componentDidUpadate react method to fetch more information when the user navigates to another users profile page since the profile page componenet's Component method only fires once when a component persists on screen.




```
deleteFriend(){
        this.user = this.props.users[this.props.match.params.userId]
        this.props.friends.map((relation) => {
            if (relation.userId == this.user.id && relation.friendId ==  this.props.currentUser.id ||
                relation.userId == this.props.currentUser.id && relation.friendId ==  this.user.id)
                {
                   this.props.removeFriendship(relation.id)
                }
```
       
In this snippet, I used the .match method passed in from a container component to find id in the url of the current frontend url. I then saved the user assocaited with that id to an instance variable that gets updated in componentDidUpdate and used the friend information stored in the current react state to find the friendship accociated with logged in user and the user being shown on the page.

Please feel free to try the live site, thanks!
https://spacebook1.herokuapp.com
            
