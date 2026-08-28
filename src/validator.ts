/**
 * Valida o título de um chamado do Service Desk.
 *
 * Regras:
 * - O título deve possuir no mínimo 5 caracteres.
 * - O título deve possuir no máximo 100 caracteres.
 *
 * @param titulo - O título do chamado a ser validado.
 * @returns `true` se o título for válido, `false` caso contrário.
 */
export function validarTituloChamado(titulo: string): boolean {
  const tituloTrimmed = titulo.trim();

  if (tituloTrimmed.length < 5) {
    return false;
  }

  if (tituloTrimmed.length > 100) {
    return false;
  }

  return true;
}
