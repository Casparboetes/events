For later


old likebutton setup

 <button onClick={ this.toggleLike.bind(this) }>
   { liked ? '🍻📢' : '🍻' }
</button>
<span className="likes">{ liked ? 'Definitly Going' : null }</span>


*******************
old tests
*******************

  describe('click it', () => {
    it('toggles the "liked" state', () => {
      // initial
      expect(button).toHaveState('liked', false)

      // first click
      button.find('button').simulate('click')
      expect(button).toHaveState('liked', true)

      // second click
      button.find('button').simulate('click')
      expect(button).toHaveState('liked', false)
    })
  })




})
