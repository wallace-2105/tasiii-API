import { validarTituloChamado } from './validator';

describe('validarTituloChamado', () => {

  // =============================================
  // Casos que devem FALHAR (retornar false)
  // =============================================

  test('deve rejeitar título vazio', () => {
    expect(validarTituloChamado('')).toBe(false);
  });

  test('deve rejeitar título com apenas espaços', () => {
    expect(validarTituloChamado('     ')).toBe(false);
  });

  test('deve rejeitar título com menos de 5 caracteres', () => {
    expect(validarTituloChamado('Abc')).toBe(false);
  });

  test('deve rejeitar título com exatamente 4 caracteres', () => {
    expect(validarTituloChamado('Abcd')).toBe(false);
  });

  test('deve rejeitar título com mais de 100 caracteres', () => {
    const tituloLongo = 'A'.repeat(101);
    expect(validarTituloChamado(tituloLongo)).toBe(false);
  });

  // =============================================
  // Casos que devem PASSAR (retornar true)
  // =============================================

  test('deve aceitar título com exatamente 5 caracteres', () => {
    expect(validarTituloChamado('Abcde')).toBe(true);
  });

  test('deve aceitar título com exatamente 100 caracteres', () => {
    const titulo100 = 'A'.repeat(100);
    expect(validarTituloChamado(titulo100)).toBe(true);
  });

  test('deve aceitar título válido comum', () => {
    expect(validarTituloChamado('Erro no sistema de login')).toBe(true);
  });

  test('deve aceitar título com 50 caracteres', () => {
    const titulo50 = 'A'.repeat(50);
    expect(validarTituloChamado(titulo50)).toBe(true);
  });

  // =============================================
  // Casos de borda (espaços extras)
  // =============================================

  test('deve rejeitar título com espaços que, após trim, fica menor que 5', () => {
    expect(validarTituloChamado('  Ab  ')).toBe(false);
  });

  test('deve aceitar título com espaços que, após trim, tem 5+ caracteres', () => {
    expect(validarTituloChamado('  Abcde  ')).toBe(true);
  });
});
