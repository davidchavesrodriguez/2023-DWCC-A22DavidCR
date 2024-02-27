<script></script>
<template>
    <ul class="fancy-list">
        <li>
          <button class="fancy-button high">Alto</button>
        </li>
        <li>
          <button class="fancy-button medium">Medio</button>
        </li>
      <li>
        <button class="fancy-button low">Baixo</button>
      </li>
    </ul>
  </template>
  
  <style>
  .fancy-list {
    list-style: none;
    padding: 0;
  }
  
  .fancy-button {
    background-color: transparent;
    border: 2px solid #4CAF50;
    color: #4CAF50;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .fancy-button.low {
    border-color: #008CBA;
    color: #008CBA;
  }
  
  .fancy-button.medium {
    border-color: #ff9800;
    color: #ff9800;
  }
  
  .fancy-button.high {
    border-color: #f44336;
    color: #f44336;
  }
  
  .fancy-button:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  </style>
  