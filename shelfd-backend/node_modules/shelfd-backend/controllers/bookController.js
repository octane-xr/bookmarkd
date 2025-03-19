export const getBookById = (req, res) => {
    const { id } = req.params;
    // Aquí iría la lógica para obtener el libro desde la BD
    res.json({ id, title: "Ejemplo de libro", author: "Autor X" });
};
