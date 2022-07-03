import View from './View';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet! Find a nice recipe and bookmark it :)';
  _message = '';

  /**
   *
   * @param {function} handler handler function to render the bookmarks on load
   * @this {Object} BookmarksView instance
   */
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  /**
   * @this {Object} BookmarksView instance
   * @returns {string} returns markup string of all bookmarks joined together
   */
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
