// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing


// function likeOrDislike(buttons) {
//     return buttons.reduce((prev, current) => prev == current ? "Nothing" : current, "Nothing")
// }

function likeOrDislike(buttons) {
    let state = 'Nothing';

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === state) {
            state = 'Nothing'
        } else {
            state = buttons[i]
        }
    }

    return state
}

console.log(likeOrDislike(["Like", "Dislike"]))