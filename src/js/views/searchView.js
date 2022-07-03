class SearchView {
  _parentEl = document.querySelector('.search');

  /**
   *
   * @returns search text value (query)
   */
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  /**
   *
   * @param {function} handler function to get the searched result and load recipes
   */
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
