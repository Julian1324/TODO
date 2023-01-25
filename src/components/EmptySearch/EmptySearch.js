import React from "react";

function EmptySearch({searchText}) {
    return (
        <p>No se han encontrado resultados para {searchText}</p>
    );
}

export { EmptySearch };