function calcularBhaskara() {
            const a = parseFloat(document.getElementById('a').value);
            const b = parseFloat(document.getElementById('b').value);
            const c = parseFloat(document.getElementById('c').value);
            const delta = b * b - 4 * a * c;
            const resultado = document.getElementById('resultado');

            if (!isNaN(delta)) {
                if (delta > 0) {
                    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
                    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
                    resultado.innerText = `As raízes são: X1 = ${x1.toFixed(2)} e X2 = ${x2.toFixed(2)}`;
                } else if (delta === 0) {
                    const x1 = -b / (2 * a);
                    resultado.innerText = `A raiz dupla é: X = ${x1.toFixed(2)}`;
                } else {
                    resultado.innerText = 'Não há raízes reais.';
                }
            } else {
                resultado.innerText = 'Por favor, insira valores válidos.';
            }
        }