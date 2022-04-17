//MessageList.js
import React, { Component } from "react";
import Modal from './Modal'

const style = {
  deleteButton: "float-right text-red-600 hover:text-red-800 cursor-pointer",
  updateButton: "float-right text-blue-600 hover:text-blue-800 cursor-pointer",
  modalOvarlay:
    "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-700/50",
  modalBackground: "flex h-screen w-screen items-center justify-center ",
  modalWrapper:
    "relative bg-white rounded-lg shadow p-4 w-full max-w-2xl h-full md:h-auto",
  modalHeader:
    "flex justify-between items-center p-5 rounded-t border-b border-gray-200 ",
  modalTitle: "text-xl font-medium leading-normal text-gray-800",
  modalContent: "p-6 space-y-6",
  modalFooter:
    "flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 ",
  textBox:
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",
  modalButton:
    "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",
  modalButtonConfirm:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
  modalClose:
    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
};

const formatDate = (time) => {
  let setTime = new Date(time);
  // let formatedTime = setTime.getFullYear() +'/'+setTime.getMonth()+'/'+setTime.getDate()+' '+setTime.getHours()+':'+setTime.getMinutes()+':'+setTime.getSeconds()
  let formatedTime = setTime.toLocaleString("en-US");
  return formatedTime;
};


class Message extends Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modalState: false,
      messageUpdate: props.msg,
    };
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  updateFunction(e) {
    e.preventDefault();
    var obj = { message: this.state.messageUpdate };
    let dbCon = this.props.db.database().ref("/messages");
    dbCon
      .child(this.props.msgKey)
      .update(obj)
      .then(() => this.toggleModal());
  }

  onClickDelete(e) {
    e.preventDefault();
    let dbCon = this.props.db.database().ref("/messages");
    dbCon.child(this.props.msgKey).remove();
  }

  onChange(e) {
    this.setState({
      messageUpdate: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.message}
        <div>{formatDate(this.props.timeStamp)}</div>
        <a className={style.deleteButton} onClick={this.onClickDelete}>
          Delete
        </a>
        <a className={style.updateButton + ` mr-2`} onClick={this.toggleModal}>
          Update
        </a>
        <Modal
          updateFunction={this.updateFunction}
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title="Edit Message"
        >
          <div>Message</div>
          <div>
            <textarea
              className={style.textBox}
              placeholder={this.props.message}
              rows={4}
              onChange={this.onChange}
              value={this.state.messageUpdate}
            ></textarea>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Message;
