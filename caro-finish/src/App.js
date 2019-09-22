import React from "react";
import "./App.css";
import Board from "./components/Board";
import Swal from "sweetalert2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(400).fill(null)
      }],
      isNext: true,
      stepNumber: 0,
      isHighLight: false,
      moves: []
    };
  }

  onHandleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] === null) {
      squares[i] = this.state.isNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        isNext: !this.state.isNext
      });
      switch (squares[i]) {
        case "X":
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i + 3] === "X" &&
            squares[i + 4] === "X" &&
            ((squares[i - 1] === "O" && squares[i + 5] !== "O") ||
              (squares[i - 1] !== "O" && squares[i + 5] === "O") ||
              (squares[i - 1] !== "O" && squares[i + 5] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i + 3] === "X" &&
            squares[i - 1] === "X" &&
            ((squares[i - 2] === "O" && squares[i + 4] !== "O") ||
              (squares[i - 2] !== "O" && squares[i + 4] === "O") ||
              (squares[i - 2] !== "O" && squares[i + 4] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            ((squares[i - 3] === "O" && squares[i + 3] !== "O") ||
              (squares[i - 3] !== "O" && squares[i + 3] === "O") ||
              (squares[i - 3] !== "O" && squares[i + 3] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            squares[i - 3] === "X" &&
            squares[i + 1] === "X" &&
            ((squares[i - 4] === "O" && squares[i + 2] !== "O") ||
              (squares[i - 4] !== "O" && squares[i + 2] === "O") ||
              (squares[i - 4] !== "O" && squares[i + 2] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            squares[i - 3] === "X" &&
            squares[i - 4] === "X" &&
            ((squares[i + 1] === "O" && squares[i - 5] !== "O") ||
              (squares[i + 1] !== "O" && squares[i - 5] === "O") ||
              (squares[i + 1] !== "O" && squares[i - 5] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          // hang doc
          if (
            squares[i + 20] === "X" &&
            squares[i + 40] === "X" &&
            squares[i + 60] === "X" &&
            squares[i + 80] === "X" &&
            ((squares[i - 20] === "O" && squares[i + 100] !== "O") ||
              (squares[i - 20] !== "O" && squares[i + 100] === "O") ||
              (squares[i - 20] !== "O" && squares[i + 100] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "X" &&
            squares[i + 2 * 20] === "X" &&
            squares[i + 3 * 20] === "X" &&
            squares[i - 1 * 20] === "X" &&
            ((squares[i - 2 * 20] === "O" && squares[i + 4 * 20] !== "O") ||
              (squares[i - 2 * 20] !== "O" && squares[i + 4 * 20] === "O") ||
              (squares[i - 2 * 20] !== "O" && squares[i + 4 * 20] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "X" &&
            squares[i + 2 * 20] === "X" &&
            squares[i - 1 * 20] === "X" &&
            squares[i - 2 * 20] === "X" &&
            ((squares[i - 3 * 20] === "O" && squares[i + 3 * 20] !== "O") ||
              (squares[i - 3 * 20] !== "O" && squares[i + 3 * 20] === "O") ||
              (squares[i - 3 * 20] !== "O" && squares[i + 3 * 20] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 20] === "X" &&
            squares[i - 2 * 20] === "X" &&
            squares[i - 60] === "X" &&
            squares[i + 20] === "X" &&
            ((squares[i - 80] === "O" && squares[i + 40] !== "O") ||
              (squares[i - 80] !== "O" && squares[i + 40] === "O") ||
              (squares[i - 80] !== "O" && squares[i + 40] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 20] === "X" &&
            squares[i - 40] === "X" &&
            squares[i - 60] === "X" &&
            squares[i - 80] === "X" &&
            ((squares[i + 20] === "O" && squares[i - 100] !== "O") ||
              (squares[i + 20] !== "O" && squares[i - 100] === "O") ||
              (squares[i + 20] !== "O" && squares[i - 100] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo phai
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i + 3 * 19] === "X" &&
            squares[i + 4 * 19] === "X" &&
            ((squares[i - 1 * 19] === "O" && squares[i + 5 * 19] !== "O") ||
              (squares[i - 1 * 19] !== "O" && squares[i + 5 * 19] === "O") ||
              (squares[i - 1 * 19] !== "O" && squares[i + 5 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i + 3 * 19] === "X" &&
            squares[i - 1 * 19] === "X" &&
            ((squares[i - 2 * 19] === "O" && squares[i + 4 * 19] !== "O") ||
              (squares[i - 2 * 19] !== "O" && squares[i + 4 * 19] === "O") ||
              (squares[i - 2 * 19] !== "O" && squares[i + 4 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            ((squares[i - 3 * 19] === "O" && squares[i + 3 * 19] !== "O") ||
              (squares[i - 3 * 19] !== "O" && squares[i + 3 * 19] === "O") ||
              (squares[i - 3 * 19] !== "O" && squares[i + 3 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            squares[i - 3 * 19] === "X" &&
            squares[i + 1 * 19] === "X" &&
            ((squares[i - 4 * 19] === "O" && squares[i + 2 * 19] !== "O") ||
              (squares[i - 4 * 19] !== "O" && squares[i + 2 * 19] === "O") ||
              (squares[i - 4 * 19] !== "O" && squares[i + 2 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            squares[i - 3 * 19] === "X" &&
            squares[i - 4 * 19] === "X" &&
            ((squares[i + 1 * 19] === "O" && squares[i - 5 * 19] !== "O") ||
              (squares[i + 1 * 19] !== "O" && squares[i - 5 * 19] === "O") ||
              (squares[i + 1 * 19] !== "O" && squares[i - 5 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo trai
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i + 3 * 21] === "X" &&
            squares[i + 4 * 21] === "X" &&
            ((squares[i - 1 * 21] === "O" && squares[i + 5 * 21] !== "O") ||
              (squares[i - 1 * 21] !== "O" && squares[i + 5 * 21] === "O") ||
              (squares[i - 1 * 21] !== "O" && squares[i + 5 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i + 3 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            ((squares[i - 2 * 21] === "O" && squares[i + 4 * 21] !== "O") ||
              (squares[i - 2 * 21] !== "O" && squares[i + 4 * 21] === "O") ||
              (squares[i - 2 * 21] !== "O" && squares[i + 4 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            ((squares[i - 3 * 21] === "O" && squares[i + 3 * 21] !== "O") ||
              (squares[i - 3 * 21] !== "O" && squares[i + 3 * 21] === "O") ||
              (squares[i - 3 * 21] !== "O" && squares[i + 3 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i - 3 * 21] === "X" &&
            squares[i + 1 * 21] === "X" &&
            ((squares[i - 4 * 21] === "O" && squares[i + 2 * 21] !== "O") ||
              (squares[i - 4 * 21] !== "O" && squares[i + 2 * 21] === "O") ||
              (squares[i - 4 * 21] !== "O" && squares[i + 2 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i - 3 * 21] === "X" &&
            squares[i - 4 * 21] === "X" &&
            ((squares[i + 1 * 21] === "O" && squares[i - 5 * 21] !== "O") ||
              (squares[i + 1 * 21] !== "O" && squares[i - 5 * 21] === "O") ||
              (squares[i + 1 * 21] !== "O" && squares[i - 5 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          break;
        case "O":
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i + 3] === "O" &&
            squares[i + 4] === "O" &&
            ((squares[i - 1] === "X" && squares[i + 5] !== "X") ||
              (squares[i - 1] !== "X" && squares[i + 5] === "X") ||
              (squares[i - 1] !== "X" && squares[i + 5] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i + 3] === "O" &&
            squares[i - 1] === "O" &&
            ((squares[i - 2] === "X" && squares[i + 4] !== "X") ||
              (squares[i - 2] !== "X" && squares[i + 4] === "X") ||
              (squares[i - 2] !== "X" && squares[i + 4] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            ((squares[i - 3] === "X" && squares[i + 3] !== "X") ||
              (squares[i - 3] !== "X" && squares[i + 3] === "X") ||
              (squares[i - 3] !== "X" && squares[i + 3] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            squares[i - 3] === "O" &&
            squares[i + 1] === "O" &&
            ((squares[i - 4] === "X" && squares[i + 2] !== "X") ||
              (squares[i - 4] !== "X" && squares[i + 2] === "X") ||
              (squares[i - 4] !== "X" && squares[i + 2] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            squares[i - 3] === "O" &&
            squares[i - 4] === "O" &&
            ((squares[i + 1] === "X" && squares[i - 5] !== "X") ||
              (squares[i + 1] !== "X" && squares[i - 5] === "X") ||
              (squares[i + 1] !== "X" && squares[i - 5] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          // hang doc
          if (
            squares[i + 20] === "O" &&
            squares[i + 40] === "O" &&
            squares[i + 60] === "O" &&
            squares[i + 80] === "O" &&
            ((squares[i - 20] === "X" && squares[i + 100] !== "X") ||
              (squares[i - 20] !== "X" && squares[i + 100] === "X") ||
              (squares[i - 20] !== "X" && squares[i + 100] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "O" &&
            squares[i + 2 * 20] === "O" &&
            squares[i + 3 * 20] === "O" &&
            squares[i - 1 * 20] === "O" &&
            ((squares[i - 2 * 20] === "X" && squares[i + 4 * 20] !== "X") ||
              (squares[i - 2 * 20] !== "X" && squares[i + 4 * 20] === "X") ||
              (squares[i - 2 * 20] !== "X" && squares[i + 4 * 20] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "O" &&
            squares[i + 2 * 20] === "O" &&
            squares[i - 1 * 20] === "O" &&
            squares[i - 2 * 20] === "O" &&
            ((squares[i - 3 * 20] === "X" && squares[i + 3 * 20] !== "X") ||
              (squares[i - 3 * 20] !== "X" && squares[i + 3 * 20] === "X") ||
              (squares[i - 3 * 20] !== "X" && squares[i + 3 * 20] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 20] === "O" &&
            squares[i - 2 * 20] === "O" &&
            squares[i - 60] === "O" &&
            squares[i + 20] === "O" &&
            ((squares[i - 80] === "X" && squares[i + 40] !== "X") ||
              (squares[i - 80] !== "X" && squares[i + 40] === "X") ||
              (squares[i - 80] !== "X" && squares[i + 40] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 20] === "O" &&
            squares[i - 40] === "O" &&
            squares[i - 60] === "O" &&
            squares[i - 80] === "O" &&
            ((squares[i + 20] === "X" && squares[i - 100] !== "X") ||
              (squares[i + 20] !== "X" && squares[i - 100] === "X") ||
              (squares[i + 20] !== "X" && squares[i - 100] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo phai
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i + 3 * 19] === "O" &&
            squares[i + 4 * 19] === "O" &&
            ((squares[i - 1 * 19] === "X" && squares[i + 5 * 19] !== "X") ||
              (squares[i - 1 * 19] !== "X" && squares[i + 5 * 19] === "X") ||
              (squares[i - 1 * 19] !== "X" && squares[i + 5 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i + 3 * 19] === "O" &&
            squares[i - 1 * 19] === "O" &&
            ((squares[i - 2 * 19] === "X" && squares[i + 4 * 19] !== "X") ||
              (squares[i - 2 * 19] !== "X" && squares[i + 4 * 19] === "X") ||
              (squares[i - 2 * 19] !== "X" && squares[i + 4 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            ((squares[i - 3 * 19] === "X" && squares[i + 3 * 19] !== "X") ||
              (squares[i - 3 * 19] !== "X" && squares[i + 3 * 19] === "X") ||
              (squares[i - 3 * 19] !== "X" && squares[i + 3 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            squares[i - 3 * 19] === "O" &&
            squares[i + 1 * 19] === "O" &&
            ((squares[i - 4 * 19] === "X" && squares[i + 2 * 19] !== "X") ||
              (squares[i - 4 * 19] !== "X" && squares[i + 2 * 19] === "X") ||
              (squares[i - 4 * 19] !== "X" && squares[i + 2 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            squares[i - 3 * 19] === "O" &&
            squares[i - 4 * 19] === "O" &&
            ((squares[i + 1 * 19] === "X" && squares[i - 5 * 19] !== "X") ||
              (squares[i + 1 * 19] !== "X" && squares[i - 5 * 19] === "X") ||
              (squares[i + 1 * 19] !== "X" && squares[i - 5 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo trai
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i + 3 * 21] === "O" &&
            squares[i + 4 * 21] === "O" &&
            ((squares[i - 1 * 21] === "X" && squares[i + 5 * 21] !== "X") ||
              (squares[i - 1 * 21] !== "X" && squares[i + 5 * 21] === "X") ||
              (squares[i - 1 * 21] !== "X" && squares[i + 5 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i + 3 * 21] === "O" &&
            squares[i - 1 * 21] === "O" &&
            ((squares[i - 2 * 21] === "X" && squares[i + 4 * 21] !== "X") ||
              (squares[i - 2 * 21] !== "X" && squares[i + 4 * 21] === "X") ||
              (squares[i - 2 * 21] !== "X" && squares[i + 4 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            ((squares[i - 3 * 21] === "X" && squares[i + 3 * 21] !== "X") ||
              (squares[i - 3 * 21] !== "X" && squares[i + 3 * 21] === "X") ||
              (squares[i - 3 * 21] !== "X" && squares[i + 3 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            squares[i - 3 * 21] === "O" &&
            squares[i + 1 * 21] === "O" &&
            ((squares[i - 4 * 21] === "X" && squares[i + 2 * 21] !== "X") ||
              (squares[i - 4 * 21] !== "X" && squares[i + 2 * 21] === "X") ||
              (squares[i - 4 * 21] !== "X" && squares[i + 2 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            squares[i - 3 * 21] === "O" &&
            squares[i - 4 * 21] === "O" &&
            ((squares[i + 1 * 21] === "X" && squares[i - 5 * 21] !== "X") ||
              (squares[i + 1 * 21] !== "X" && squares[i - 5 * 21] === "X") ||
              (squares[i + 1 * 21] !== "X" && squares[i - 5 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          break;
      }
    }
  };

  jumpTo(step) {
    // const history = this.state.history;
    
    this.setState({
      stepNumber: step,
      isNext: (step % 2) === 0,
      isHighLight: (step ? true : false)
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const status = "Next player: " + (this.state.isNext ? "X" : "O");

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button
          onClick={() => this.jumpTo(move)}
        >{this.state.stepNumber === move ? <span style={{color: 'red'}}>{desc}</span> : <span>{desc}</span>}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
          squares={current.squares}
          isNext={this.state.isNext}
          onHandleClick={this.onHandleClick}
          />
        </div>
        <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
