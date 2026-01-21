import { Popup } from "./PopUp.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
  }

  _getInputValues() {}
}
