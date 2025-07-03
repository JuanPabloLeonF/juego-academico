const questions = {
    ciencias: [
        {
            question: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
            options: ["Fotosíntesis", "Clorofila", "Fermentación"],
            correct: 0
        },
        {
            question: "¿Cuál es el planeta más grande del sistema solar?",
            options: ["Saturno", "Marte", "Júpiter"],
            correct: 2
        },
        {
            question: "¿Qué es la capa más externa de la Tierra?",
            options: ["Núcleo", "Manto", "Corteza terrestre"],
            correct: 2
        },
        {
            question: "¿Cuál es el principal componente del aire que respiramos?",
            options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono"],
            correct: 1
        },
        {
            question: "¿Qué es el proceso por el cual el agua se mueve a través de la atmósfera?",
            options: ["Fotosíntesis", "Ciclo del agua", "Condensación"],
            correct: 1
        },
        {
            question: "¿Cuál es el órgano responsable de bombear sangre en el cuerpo humano?",
            options: ["Pulmones", "Cerebro", "Corazón"],
            correct: 2
        },
        {
            question: "¿Qué es la fuerza que atrae objetos hacia el centro de la Tierra?",
            options: ["Inercia", "Gravedad", "Magnetismo"],
            correct: 1
        }
    ],
    quimica: [
        {
            question: "¿Cuál es el símbolo químico del oro?",
            options: ["Ag", "Au", "O"],
            correct: 1
        },
        {
            question: "¿Qué es la tabla periódica de los elementos?",
            options: ["Un libro sobre química", "Una tabla que organiza los elementos químicos según sus propiedades y número atómico", "Un experimento químico"],
            correct: 1
        },
        {
            question: "¿Cuál es el proceso por el cual un átomo gana o pierde electrones?",
            options: ["Fusión", "Ionización", "Sublimación"],
            correct: 1
        },
        {
            question: "¿Qué es un enlace covalente?",
            options: ["Un enlace químico en el que dos átomos comparten electrones", "Un enlace iónico entre iones positivos y negativos", "Un tipo de reacción química"],
            correct: 0
        },
        {
            question: "¿Qué es un mol?",
            options: ["Una unidad de medida que representa 6,022 x 10²³ partículas (átomos o moléculas)", "Un tipo de átomo", "Una reacción química"],
            correct: 0
        },
        {
            question: "¿Qué es la reacción química en la que se combina un ácido con una base?",
            options: ["Oxidación", "Neutralización", "Reducción"],
            correct: 1
        },
        {
            question: "¿Cuál es el elemento químico más ligero?",
            options: ["Helio", "Carbono", "Hidrógeno"],
            correct: 2
        }
    ],
    matematicas: [
        {
            question: "Si se lanza una moneda justa, ¿cuál es la probabilidad de obtener cara?",
            options: ["1/3", "1/4", "1/2"],
            correct: 2
        },
        {
            question: "Un dado justo se lanza. ¿Cuál es la probabilidad de obtener un número par?",
            options: ["1/2", "1/3", "1/4"],
            correct: 0
        },
        {
            question: "Una bolsa contiene 4 bolas rojas y 2 bolas azules. ¿Cuál es la probabilidad de sacar una bola roja?",
            options: ["2/3", "1/2", "1/4"],
            correct: 0
        },
        {
            question: "Si se lanzan dos monedas justas, ¿cuál es la probabilidad de obtener dos caras?",
            options: ["1/2", "1/4", "3/4"],
            correct: 1
        },
        {
            question: "Un naipe estándar se saca de una baraja. ¿Cuál es la probabilidad de obtener un as?",
            options: ["1/13", "1/10", "1/52"],
            correct: 0
        },
        {
            question: "Un artículo cuesta $100. Si se aplica un descuento del 20%, ¿cuánto cuesta después del descuento?",
            options: ["$80", "$70", "$90"],
            correct: 0
        },
        {
            question: "Un número aumenta un 15% y luego disminuye un 10%. ¿Cuál es el cambio porcentual neto?",
            options: ["Aumento del 5%", "Aumento del 3.5%", "Disminución del 5%"],
            correct: 1
        },
        {
            question: "Un producto tiene un precio original de $50. Si se vende con un descuento del 10%, ¿cuánto cuesta después del descuento?",
            options: ["$45", "$40", "$48"],
            correct: 0
        },
        {
            question: "Una persona invierte $500 y gana un 8% de interés anual. ¿Cuánto dinero tendrá después de 1 año?",
            options: ["$540", "$580", "$500"],
            correct: 0
        },
        {
            question: "Un artículo se vende con un aumento del 25% sobre su precio original de $80. ¿Cuánto cuesta después del aumento?",
            options: ["$100", "$90", "$110"],
            correct: 0
        },
        {
            question: "¿Cuál es el área de un triángulo con base 6 cm y altura 8 cm?",
            options: ["14 cm²", "24 cm²", "48 cm²"],
            correct: 1
        },
        {
            question: "¿Cuál es el perímetro de un rectángulo con largo 10 cm y ancho 5 cm?",
            options: ["30 cm", "50 cm", "15 cm"],
            correct: 0
        },
        {
            question: "¿Cuál es la fórmula para calcular el área de un círculo?",
            options: ["A = 2πr", "A = πr²", "A = πd"],
            correct: 1
        },
        {
            question: "¿Cuál es el volumen de un cubo con arista 5 cm?",
            options: ["25 cm³", "125 cm³", "100 cm³"],
            correct: 1
        },
        {
            question: "¿Cuál es la medida de un ángulo recto?",
            options: ["90°", "45°", "180°"],
            correct: 0
        },
        {
            question: "¿Cuál es el área de un cuadrado con lado 4 cm?",
            options: ["8 cm²", "12 cm²", "16 cm²"],
            correct: 2
        },
        {
            question: "¿Cuál es la fórmula para calcular la circunferencia de un círculo?",
            options: ["C = πr²", "C = 2πr", "C = πd²"],
            correct: 1
        },
        {
            question: "¿Cuál es el nombre del polígono con 5 lados?",
            options: ["Hexágono", "Pentágono", "Cuadrado"],
            correct: 1
        },
        {
            question: "¿Cuál es el área de un rombo con diagonales 6 cm y 8 cm?",
            options: ["24 cm²", "28 cm²", "48 cm²"],
            correct: 0
        },
        {
            question: "¿Cuál es el nombre del ángulo que mide más de 90° pero menos de 180°?",
            options: ["Ángulo agudo", "Ángulo obtuso", "Ángulo recto"],
            correct: 1
        }
    ],
    español: [
        {
            question: "¿Cuál es el significado correcto del término 'anáfora' en literatura?",
            options: ["Repetición de palabras al inicio de un verso o frase", "Figura que exagera una idea para enfatizarla", "Cambio en el orden habitual de las palabras"],
            correct: 0
        },
        {
            question: "En la oración 'El niño que juega en el parque es mi primo', ¿qué tipo de oración es?",
            options: ["Oración compuesta subordinada de relativo", "Oración simple con complemento directo", "Oración compuesta coordinada copulativa"],
            correct: 0
        },
        {
            question: "¿Cuál es el tiempo verbal del verbo en la oración: “Cuando llegues, llámame”?",
            options: ["Pretérito perfecto simple", "Futuro imperfecto", "Presente subjuntivo"],
            correct: 2
        },
        {
            question: "¿Qué función cumple el sujeto en la oración?",
            options: ["Indicar quién realiza la acción del verbo", "Expresar la acción que se realiza", "Complementar el verbo con información adicional"],
            correct: 0
        },
        {
            question: "¿Cuál es el antónimo correcto de la palabra 'efímero'?",
            options: ["Duradero", "Insignificante", "Rápido"],
            correct: 0
        },
        {
            question: "En la frase “El autor utiliza un lenguaje coloquial para acercarse al lector”, ¿qué tipo de lenguaje se menciona?",
            options: ["Formal", "Coloquial", "Técnico"],
            correct: 1
        },
        {
            question: "¿Qué figura literaria se utiliza en 'Tus ojos son dos luceros'?",
            options: ["Hipérbole", "Metáfora", "Onomatopeya"],
            correct: 1
        },
        {
            question: "¿Cuál es la función principal del texto expositivo?",
            options: ["Informar y explicar un tema de forma clara y objetiva", "Contar una historia inventada con personajes ficticios", "Persuadir al lector sobre una opinión personal"],
            correct: 0
        },
        {
            question: "En la palabra 'incomprensible', ¿cuál es el prefijo que indica negación?",
            options: ["con-", "in-", "pre-"],
            correct: 1
        },
        {
            question: "¿Qué tipo de palabra es “rápidamente”?",
            options: ["Sustantivo abstracto", "Adjetivo calificativo", "Adverbio de modo"],
            correct: 2
        },
        {
            question: "¿Cuál es el significado de la palabra 'inexorable'?",
            options: ["Que no se puede evitar o detener", "Que es fácil de convencer", "Que tiene múltiples significados"],
            correct: 0
        },
        {
            question: "En la oración 'El libro que me prestaste es interesante', ¿qué función cumple 'que me prestaste'?",
            options: ["Complemento directo", "Oración subordinada adjetiva", "Complemento circunstancial"],
            correct: 1
        },
        {
            question: "¿Cuál es el antónimo de 'efímero'?",
            options: ["Permanente", "Rápido", "Insignificante"],
            correct: 0
        },
        {
            question: "¿Cuál es la figura literaria presente en la frase 'El tiempo es oro'?",
            options: ["Metáfora", "Hipérbole", "Personificación"],
            correct: 0
        },
        {
            question: "¿Cuál es el error gramatical en la siguiente oración? 'Nosotros fuimos a la fiesta y bailamos mucho.'",
            options: ["Uso incorrecto del verbo 'fuimos'", "Concordancia incorrecta entre sujeto y verbo", "No hay error gramatical"],
            correct: 2
        }
    ],
    sociales: [
        {
            question: "¿Cuál fue el principal factor que contribuyó a la expansión europea en América durante el siglo XV?",
            options: ["La búsqueda de nuevas rutas comerciales", "La propagación del cristianismo", "La conquista de nuevos territorios"],
            correct: 0
        },
        {
            question: "¿Cuál es el nombre del tratado que puso fin a la Primera Guerra Mundial?",
            options: ["Tratado de Berlín", "Tratado de Versalles", "Tratado de París"],
            correct: 1
        },
        {
            question: "¿Cuál es el principal objetivo de la Organización de las Naciones Unidas (ONU)?",
            options: ["Fomentar el comercio internacional", "Promover la paz y la seguridad internacionales", "Defender los derechos humanos"],
            correct: 1
        },
        {
            question: "¿Cuál es el nombre del proceso histórico que se refiere a la transición de la producción manual a la producción mecanizada en Europa durante los siglos XVIII y XIX?",
            options: ["Revolución Francesa", "Revolución Industrial", "Revolución Mexicana"],
            correct: 1
        },
        {
            question: "¿Cuál es el principal factor que determina la formación de un relieve montañoso?",
            options: ["El clima", "La erosión fluvial", "La tectónica de placas"],
            correct: 2
        },
        {
            question: "¿Cuál es el nombre del río más largo de América del Sur?",
            options: ["Río Amazonas", "Río Magdalena", "Río Paraná"],
            correct: 0
        },
        {
            question: "¿Cuál es el principal objetivo de la economía socialista?",
            options: ["Promover la competencia", "Reducir la desigualdad económica", "Satisfacer las necesidades básicas de la población"],
            correct: 2
        },
        {
            question: "¿Cuál es el nombre del filósofo griego que desarrolló la teoría de la forma y la materia?",
            options: ["Platón", "Epicuro", "Aristóteles"],
            correct: 0
        },
        {
            question: "¿Cuál es el principal factor que influye en la distribución de la población en un territorio?",
            options: ["La cultura", "La geografía", "El clima"],
            correct: 1
        },
        {
            question: "¿Cuál es el nombre del movimiento artístico que surgió en Europa durante el siglo XVI?",
            options: ["Barroco", "Renacimiento", "Rococó"],
            correct: 1
        },
        {
            question: "¿Cuál es el principal objetivo de la educación cívica?",
            options: ["Desarrollar habilidades laborales", "Promover la participación ciudadana", "Fomentar el nacionalismo"],
            correct: 1
        },
        {
            question: "¿Cuál es el nombre del sistema económico que se basa en la propiedad privada y la libre empresa?",
            options: ["Socialismo", "Capitalismo", "Comunismo"],
            correct: 1
        },
        {
            question: "¿Cuál es el principal factor que contribuye a la degradación del medio ambiente?",
            options: ["La contaminación del aire y del agua", "La sobreexplotación de recursos naturales", "La deforestación"],
            correct: 0
        },
        {
            question: "¿Cuál es el nombre del proceso histórico que se refiere a la lucha por la independencia de los países latinoamericanos durante el siglo XIX?",
            options: ["La Independencia", "La Conquista", "La Colonia"],
            correct: 0
        },
        {
            question: "¿Cuál es el principal objetivo de la geografía como disciplina científica?",
            options: ["Analizar los procesos económicos y políticos", "Describir y explicar los fenómenos físicos y humanos en la superficie terrestre", "Estudiar la distribución de la población en la Tierra"],
            correct: 1
        }
    ],
    biologia: [
        {
            question: "¿Cuál es la unidad básica de la vida?",
            options: ["Tejido", "Célula", "Órgano"],
            correct: 1
        },
        {
            question: "¿Qué es la fotosíntesis?",
            options: ["Proceso de respiración de los animales", "Proceso por el cual las plantas producen su propio alimento utilizando la luz solar", "Proceso de digestión en plantas"],
            correct: 1
        },
        {
            question: "¿Cuál es el sistema que coordina las funciones del cuerpo humano?",
            options: ["Sistema digestivo", "Sistema nervioso", "Sistema circulatorio"],
            correct: 1
        },
        {
            question: "¿Qué es la mitosis?",
            options: ["División celular que resulta en dos células hijas idénticas", "Proceso de producción de energía celular", "Formación de células sexuales"],
            correct: 0
        },
        {
            question: "¿Cuál es la función del ADN en las células?",
            options: ["Producir energía", "Transportar oxígeno", "Almacenar información genética"],
            correct: 2
        },
        {
            question: "¿Cuál es el órgano responsable de la respiración en los humanos?",
            options: ["Corazón", "Pulmones", "Hígado"],
            correct: 1
        },
        {
            question: "¿Qué es la selección natural?",
            options: ["Proceso por el cual las especies se adaptan y evolucionan a través de la supervivencia y reproducción de los individuos más aptos", "Proceso de alimentación selectiva en animales", "Método para seleccionar plantas en agricultura"],
            correct: 0
        },
        {
            question: "¿Qué es la homeostasis?",
            options: ["Crecimiento celular rápido", "Muerte celular programada", "Mantenimiento del equilibrio interno estable"],
            correct: 2
        },
        {
            question: "¿Cuál es el tipo de célula que no tiene núcleo?",
            options: ["Célula eucariota", "Célula procariota", "Célula muscular"],
            correct: 1
        },
        {
            question: "¿Qué es la biodiversidad?",
            options: ["La variedad de especies y ecosistemas en un área determinada", "Número total de plantas en un lugar", "Cantidad de agua disponible para organismos"],
            correct: 0
        }
    ]
};

// Variables del juego
let currentSubject = '';
let currentQuestionIndex = 0;
let currentQuestions = [];
let score = 0;
let answered = false;

// Nombres de las materias
const subjectNames = {
    ciencias: 'Ciencias Naturales',
    quimica: 'Química',
    matematicas: 'Matemáticas',
    español: 'Español',
    sociales: 'Sociales',
    biologia: 'Biología'
};

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const wheelSections = document.querySelectorAll('.section');
    wheelSections.forEach(section => {
        section.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            console.log(subject);
            startQuiz(subject);
        });
    });

    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

function startQuiz(subject) {
    currentSubject = subject;
    currentQuestions = [...questions[subject]];
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    // Mezclar preguntas
    shuffleArray(currentQuestions);

    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('subject-display').textContent = subjectNames[subject];

    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('progress').textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('next-btn').style.display = 'none';
    answered = false;
}

function selectOption(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });

    if (selectedIndex === question.correct) {
        score++;
    }

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const totalQuestions = currentQuestions.length;
    const incorrectAnswers = totalQuestions - score;
    const percentage = Math.round((score / totalQuestions) * 100);

    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    document.getElementById('final-score').textContent = `${score}/${totalQuestions}`;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('incorrect-count').textContent = incorrectAnswers;
    document.getElementById('percentage').textContent = `${percentage}%`;
}

function restartGame() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}