// 'use client';
// import React, { useState, useEffect } from "react";

// const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isPlayerTurn, setIsPlayerTurn] = useState(true);
//   const [winner, setWinner] = useState(null);
//   const [difficulty, setDifficulty] = useState("Medium"); // Default difficulty

//   useEffect(() => {
//     if (!isPlayerTurn && !winner) {
//       const aiMove = setTimeout(() => makeAIMove(), 500); // AI delay for realism
//       return () => clearTimeout(aiMove);
//     }
//   }, [isPlayerTurn, winner]);

//   const checkWinner = (newBoard) => {
//     const winningCombos = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8],
//       [0, 3, 6], [1, 4, 7], [2, 5, 8],
//       [0, 4, 8], [2, 4, 6],
//     ];
//     for (let combo of winningCombos) {
//       const [a, b, c] = combo;
//       if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
//         return newBoard[a];
//       }
//     }
//     return newBoard.includes(null) ? null : "Draw";
//   };

//   const handleClick = (index) => {
//     if (board[index] || winner || !isPlayerTurn) return;
//     const newBoard = [...board];
//     newBoard[index] = "X"; // Player always plays 'X'
//     setBoard(newBoard);
//     setIsPlayerTurn(false);
//     const gameWinner = checkWinner(newBoard);
//     if (gameWinner) setWinner(gameWinner);
//   };

//   const makeAIMove = () => {
//     if (winner) return;
//     let move;
//     if (difficulty === "Easy") {
//       move = getRandomMove(board);
//     } else if (difficulty === "Medium") {
//       move = Math.random() > 0.5 ? findBestMove(board) : getRandomMove(board);
//     } else {
//       move = findBestMove(board); // Hard mode (Minimax)
//     }
//     if (move !== -1) {
//       const newBoard = [...board];
//       newBoard[move] = "O"; // AI plays 'O'
//       setBoard(newBoard);
//       setIsPlayerTurn(true);
//       const gameWinner = checkWinner(newBoard);
//       if (gameWinner) setWinner(gameWinner);
//     }
//   };

//   const getRandomMove = (board) => {
//     const availableMoves = board.map((val, i) => (val === null ? i : null)).filter((val) => val !== null);
//     return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : -1;
//   };

//   const findBestMove = (board) => {
//     let bestScore = -Infinity;
//     let move = -1;
//     for (let i = 0; i < 9; i++) {
//       if (!board[i]) {
//         board[i] = "O"; // AI makes a move
//         let score = minimax(board, 0, false);
//         board[i] = null; // Undo move
//         if (score > bestScore) {
//           bestScore = score;
//           move = i;
//         }
//       }
//     }
//     return move;
//   };

//   const minimax = (board, depth, isMaximizing) => {
//     const result = checkWinner(board);
//     if (result === "X") return -10 + depth;
//     if (result === "O") return 10 - depth;
//     if (result === "Draw") return 0;
//     if (isMaximizing) {
//       let bestScore = -Infinity;
//       for (let i = 0; i < 9; i++) {
//         if (!board[i]) {
//           board[i] = "O";
//           let score = minimax(board, depth + 1, false);
//           board[i] = null;
//           bestScore = Math.max(score, bestScore);
//         }
//       }
//       return bestScore;
//     } else {
//       let bestScore = Infinity;
//       for (let i = 0; i < 9; i++) {
//         if (!board[i]) {
//           board[i] = "X";
//           let score = minimax(board, depth + 1, true);
//           board[i] = null;
//           bestScore = Math.min(score, bestScore);
//         }
//       }
//       return bestScore;
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsPlayerTurn(true);
//     setWinner(null);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h2 className="text-lg font-bold text-center mb-2">Tic-Tac-Toe (AI Levels)</h2>

//       <div className="text-center mb-2">
//         <label className="font-bold">Difficulty: </label>
//         <select
//           value={difficulty}
//           onChange={(e) => setDifficulty(e.target.value)}
//           className="border border-gray-300 px-2 py-1 rounded"
//         >
//           <option value="Easy">Easy</option>
//           <option value="Medium">Medium</option>
//           <option value="Hard">Hard (Unbeatable)</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-3 gap-1 w-40 h-40">
//         {board.map((cell, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-xl font-bold"
//           >
//             {cell}
//           </button>
//         ))}
//       </div>

//       {winner && (
//         <p className="text-center text-green-600 font-bold mt-2">
//           {winner === "Draw" ? "It's a Draw! 🤝" : `Winner: ${winner} 🎉`}
//         </p>
//       )}

//       <button
//         onClick={resetGame}
//         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Restart
//       </button>
//     </div>
//   );
// };

// export default TicTacToe;
