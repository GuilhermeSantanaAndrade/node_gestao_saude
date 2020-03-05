import app from "./app";

const PORT = process.env.PORT || 3000;
export default app.listen(PORT, () => {
  console.log(`Servidor ON (Porta ${PORT})`);
});
