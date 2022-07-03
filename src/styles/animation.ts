export const appearance = (delay: number) => `
  animation: up;
  animation-duration: 700ms;
  animation-delay: ${delay}ms;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateY(30px);
  
  @keyframes up {
    from {
    }
    to {
      transform: unset;
      opacity: 1;
    }
  }
`
