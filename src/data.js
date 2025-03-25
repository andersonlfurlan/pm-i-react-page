import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Componentes',
    description:
      'O bloco de construção principal da interface do usuário - componha a interface combinando vários componentes.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Retorne código HTML (ou algo semelhante) (potencialmente dinâmico) para definir o markup real que será renderizado.',
  },
  {
    image: propsImg,
    title: 'Propriedades',
    description:
      'Torne os componentes configuráveis (e, portanto, reutilizáveis) passando dados de entrada para eles.',
  },
  {
    image: stateImg,
    title: 'Estado',
    description:
      'Dados gerenciados pelo React que, quando alterados, fazem o componente ser re-renderizado e a interface do usuário ser atualizada.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Componentes',
    description:
      'Componentes são os blocos de construção de aplicações React. Um componente é um módulo autônomo (HTML + CSS opcional + JS) que renderiza alguma saída.',
    code: `
function Welcome() {
  return <h1>Olá, Mundo!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX é uma extensão de sintaxe para JavaScript. É semelhante a uma linguagem de template, mas tem todo o poder do JavaScript (por exemplo, pode gerar conteúdo dinâmico).',
    code: `
<div>
  <h1>Bem-vindo {userName}</h1>
  <p>Hora de aprender React!</p>
</div>`,
  },
  props: {
    title: 'Propriedades',
    description:
      'Componentes aceitam entradas arbitrárias chamadas propriedades (props). Elas são como argumentos de função.',
    code: `
function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}`,
  },
  state: {
    title: 'Estado',
    description:
      'O estado permite que os componentes React mudem sua saída ao longo do tempo em resposta a ações do usuário, respostas de rede e qualquer outra coisa.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar Detalhes</button>
      {isVisible && <p>Detalhes incríveis!</p>}
    </div>
  );
}`,
  },
};