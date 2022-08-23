# 15across

a modal system for building and solving grid based word puzzles.

## features

### building

* modal driven design for text and grid manipulation
* select from a variety of common layouts
* clue and word database
* embedding for your site after creation

### solving 

* modal solving for editing, navigating, and checking the grid
* advanced leaderboard tracking
* track puzzles solved
* stats and analytics after solving
* quick dictionary for viewing definitions of words

---

## inspiration

playing crosswords and wordgames

---

## r&d

### creation

* crosswords typically start with a theme
* words and thematic words are the center piece of the puzzle
* mostly just trial and error

### sizing

* standard sizes (depending on day)
	* 15 * 15
	* 17 * 17
	* 23 * 23
* weekends prefer larger grids 

### words and theories

* _never_ create two letter words
* **limit** 3 letter words

### clues

* clues aren't necessarily reused, sometimes just made on spot

---

## todos

### builder focus to start

- [x] get grid working with customizeable width/heights
- [x] let h+w be customizeable via ui numbers and/or presets
- [x] create smart highlighting based on cell id
- [x] develop intuitive movement using grid sizing
- [x] get `hjkl` working properly for grid movement
- [ ] reset highlighter on grid changes
- [ ] create modes interface


