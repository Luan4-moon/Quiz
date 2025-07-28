const toggleBtn = document.getElementById('toggle-dark');

if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('dark-mode', isDark);
});

document.querySelectorAll('.question').forEach((questionBlock) => {
  const radios = questionBlock.querySelectorAll('input[type="radio"]');
  const buttons = questionBlock.querySelectorAll('.answer-btn');
  const nextBtn = questionBlock.querySelector('.next-btn');
  let answered = false;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (answered) return;

      const radioId = button.dataset.for;
      const radio = document.getElementById(radioId);
      radio.checked = true;
      answered = true;

      buttons.forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
      });
      radios.forEach(r => r.disabled = true);

      if (button.dataset.correct === 'true') {
        button.classList.add('correct');
      } else {
        button.classList.add('incorrect');
        buttons.forEach(btn => {
          if (btn.dataset.correct === 'true') btn.classList.add('correct');
        });
      }

      nextBtn.style.display = 'inline-block';
    });
  });

  nextBtn.addEventListener('click', () => {
    const currentQuestion = nextBtn.closest('.question');
    const nextQuestionId = nextBtn.getAttribute('data-next');
    const nextQuestion = document.getElementById(nextQuestionId);

    currentQuestion.style.display = 'none';
    if (nextQuestion) {
      nextQuestion.style.display = 'block';
    }
  });
});
const quizContainer = document.getElementById('quiz-container');

const questions = [
  {
    question: "Qual foi a primeira ilha que o Bando do Chapéu de Palha visitou após entrar na Grand Line?",
    answers: [
      { text: "Whiskey Peak", correct: true },
      { text: "Little Garden", correct: false },
      { text: "Drum Island", correct: false },
      { text: "Alabasta", correct: false }
    ]
  },
  {
    question: "Qual é o nome do navio original do Bando do Chapéu de Palha?",
    answers: [
      { text: "Going Merry", correct: true },
      { text: "Thousand Sunny", correct: false },
      { text: "Oro Jackson", correct: false },
      { text: "Moby Dick", correct: false },
      { text: "Red Force", correct: false }
    ]
  },
  {
    question: "Como se chama a espada que Zoro recebeu de Kuina?",
    answers: [
      { text: "Yubashiri", correct: false },
      { text: "Shusui", correct: false },
      { text: "Enma", correct: false },
      { text: "Sandai Kitetsu", correct: false },
      { text: "Wado Ichimonji", correct: true }
    ]
  },
  {
    question: "Qual é o nome do plano de Baroque Works?",
    answers: [
      { text: "Missão Oasis", correct: false },
      { text: "Projeto D", correct: false },
      { text: "Operação Sphinx", correct: true },
      { text: "Plano Centaur", correct: false },
      { text: "Operação Tornado", correct: false }
    ]
  },
  {
    question: 'Qual a habilidade principal do personagem "Jinbe"?',
    answers: [
      { text: "Jiu-Jitsu das Águas", correct: false },
      { text: "Controle das Águas", correct: false },
      { text: "Técnicas de espada", correct: false },
      { text: "Karater dos Homens-Peixes", correct: true },
      { text: "Controle sobre Peixes", correct: false }
    ]
  },
  {
    question: "Qual é o nome da planta que o Dr. Hiluluk acreditava poder curar qualquer doença?",
    answers: [
      { text: "Girassol", correct: false },
      { text: "Sakura", correct: true },
      { text: "Rosa", correct: false },
      { text: "Amber Lead", correct: false },
      { text: "Lily", correct: false }
    ]
  },
  {
    question: "Quem foi o primeiro personagem a ser mostrado com uma recompensa?",
    answers: [
      { text: "Luffy", correct: false },
      { text: "Roger", correct: false },
      { text: "Zoro", correct: false },
      { text: "Buggy", correct: true },
      { text: "Alvida", correct: false }
    ]
  },
  {
    question: "Quantos anos se passaram entre o nascimento de Gol D. Roger e a execução dele?",
    answers: [
      { text: "19 a 20", correct: false },
      { text: "50 a 55", correct: false },
      { text: "30 a 40", correct: true },
      { text: "35 a 45", correct: false },
      { text: "60", correct: false }
    ]
  },
  {
    question: "Qual é o nome do plano de Baroque Works?",
    answers: [
      { text: "O tesouro da cidade de ouro repousa aqui", correct: false },
      { text: "Aqui jaz o Reino de Shandora", correct: false },
      { text: "Pelo povo de Shandora, o som da libertação", correct: false },
      { text: "Nós viemos aqui e iremos nos encontrar novamente. Gold Roger", correct: true },
      { text: "Deus protegerá nossa cidade sagrada", correct: false }
    ]
  },
  {
    question: 'Quem disse a frase: "Mesmo que eu morra, não direi nada. Nós somos amigos!"',
    answers: [
      { text: "Nico Robin", correct: true },
      { text: "Monkey D. Luffy", correct: false },
      { text: "Vinsmoke Sanji", correct: false },
      { text: "Roronoa Zoro", correct: false },
      { text: "Koby", correct: false }
    ]
  },
  {
    question: "Quem é o único personagem confirmado que lutou contra Gol D. Roger e sobreviveu sem ser da tripulação dele ou do Garp?",
    answers: [
      { text: "Shiki", correct: false },
      { text: "Figarland Garling", correct: false },
      { text: "Kozuki Oden", correct: true },
      { text: "Whitebeard", correct: false },
      { text: "Sengoku, o Buda", correct: false }
    ]
  },
  {
    question: "Qual era a alcunha da vice-almirante Tsuru?",
    answers: [
      { text: "A Tática de Ferro", correct: false },
      { text: "Grande Estratégista", correct: true },
      { text: "A Teia da Justiça", correct: false },
      { text: "A Tempestade de Justiça", correct: false },
      { text: "A Dama do Mar", correct: false }
    ]
  },
  {
    question: "Qual é o número do laboratório onde Caesar Clown fazia experimentos em Punk Hazard?",
    answers: [
      { text: "G-0", correct: false },
      { text: "G-1", correct: false },
      { text: "G-2", correct: false },
      { text: "G-3", correct: true },
      { text: "G-4", correct: false }
    ]
  },
  {
    question: "Qual era o número de prisioneiro do Bon Clay em Impel Down?",
    answers: [
      { text: "642", correct: false },
      { text: "567", correct: false },
      { text: "658", correct: false },
      { text: "715", correct: false },
      { text: "626", correct: true }
    ]
  },
  {
    question: "Quem disse a seguinte frase? “Estive esperando por uma chance de encontrar alguém como você...”",
    answers: [
      { text: "Shiryu", correct: true },
      { text: "Zoro", correct: false },
      { text: "Kozuki Oden", correct: false },
      { text: "Eustass Kid", correct: false },
      { text: "Sanji", correct: false }
    ]
  }
];
