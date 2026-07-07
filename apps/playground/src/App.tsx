import "./App.scss";
import { useState } from "react";
import {
  Check,
  X,
  Star,
  Zap,
  Heart,
  ArrowRight,
  Menu,
  Sparkles,
  Shield,
} from "lucide-react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Input,
  Progress,
  Toggle,
  Halftone,
  SectionTitle,
  SpeechBubble,
  Tooltip,
  Avatar,
  Select,
  useTheme,
} from "@my-design-system/ui";

const INK = "#0D0D0D";
const YELLOW = "#FCD12A";
const BLUE = "#0057FF";
const RED = "#FF2D2D";
const GREEN = "#22C55E";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(true);
  const [toggleC, setToggleC] = useState(false);
  const [power, setPower] = useState(68);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav className="app__nav">
        <div className="app__nav-container">
          <div className="app__nav-brand-group">
            <div className="app__nav-logo">INK</div>
            <span className="app__nav-title">UI</span>
            <Badge variant="neutral">v1.0</Badge>
          </div>
          <div className="app__nav-links">
            {["Componentes", "Tokens", "Docs", "GitHub"].map((item) => (
              <a key={item} href="#" className="app__nav-link">
                {item}
              </a>
            ))}
            <Toggle checked={isDark} onChange={toggleTheme} label="Dark mode" />
          </div>
          <button
            className="app__nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div className="app__nav-mobile">
            {["Componentes", "Tokens", "Docs", "GitHub"].map((item) => (
              <a key={item} href="#" className="app__nav-mobile-link">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="app__hero">
        <Halftone
          className="inset-0 w-full h-full"
          color="#FFFFFF"
          opacity={0.06}
          size={16}
        />
        {/* diagonal stripe deco */}
        <div className="app__hero-stripes" />

        <div className="app__hero-grid">
          {/* left */}
          <div>
            <div className="app__hero-eyebrow">Design System</div>
            <h1 className="app__hero-title">INK UI</h1>
            <p className="app__hero-text">
              Design system com alma de quadrinhos. Traços ousados, sombras
              offset e tipografia expressiva para qualquer projeto.
            </p>
            <div className="app__hero-actions">
              <Button size="lg">
                <span className="app__icon-label">
                  Começar <ArrowRight size={18} />
                </span>
              </Button>
              <Button variant="ghost" size="lg">
                Ver Docs
              </Button>
            </div>
          </div>

          {/* right — speech bubbles */}
          <div className="app__hero-right">
            <div className="app__hero-bubble-1">
              <SpeechBubble direction="left">
                <p className="app__bubble-text">
                  POW! Componentes que chamam atenção!
                </p>
              </SpeechBubble>
            </div>
            <div className="app__hero-bubble-2">
              <SpeechBubble direction="right" bg="bg-[#FCD12A]">
                <p className="app__bubble-text">
                  100% customizável. Zero lorem ipsum.
                </p>
              </SpeechBubble>
            </div>

            {/* star burst */}
            <div className="app__hero-burst">
              <div className="app__hero-burst-shape">
                <span className="app__hero-burst-text">ZAP!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="app__content">
        {/* 01 — CORES */}
        <section>
          <SectionTitle number="01" title="Paleta de Cores" />
          <div className="app__color-grid">
            {[
              { name: "Amarelo", hex: YELLOW, label: "Primary", dark: false },
              { name: "Azul", hex: BLUE, label: "Secondary", dark: true },
              { name: "Vermelho", hex: RED, label: "Accent", dark: true },
              { name: "Verde", hex: GREEN, label: "Success", dark: true },
              { name: "Tinta", hex: INK, label: "Foreground", dark: true },
            ].map((c) => (
              <div key={c.name} className="app__color-card">
                <div
                  className="app__color-swatch"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="app__color-body">
                  <p className="app__color-name">{c.name}</p>
                  <p className="app__color-hex">{c.hex}</p>
                  <Badge variant="neutral">{c.label}</Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02 — TIPOGRAFIA */}
        <section>
          <SectionTitle number="02" title="Tipografia" />
          <Card>
            <div className="app__stack-5">
              <div className="app__type-block">
                <p className="app__label">Display · Bangers</p>
                <p className="app__type-display">TÍTULO PRINCIPAL</p>
              </div>
              <div className="app__type-block">
                <p className="app__label">Heading · Comic Neue Black</p>
                <p className="app__type-heading">Subtítulo de Seção</p>
              </div>
              <div className="app__type-block">
                <p className="app__label">Body · Comic Neue Regular</p>
                <p className="app__type-body">
                  Texto de corpo com boa legibilidade. O Comic Neue mantém o
                  charme hand-drawn sem sacrificar a leitura em blocos de texto
                  corrido. Ideal para parágrafos, descrições e conteúdo
                  editorial.
                </p>
              </div>
              <div>
                <p className="app__label">Label · Space Mono</p>
                <p className="app__type-mono">
                  STATUS: ACTIVE · VERSION: 1.0.0 · BUILD: 2026-07-03
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 03 — BOTÕES */}
        <section>
          <SectionTitle number="03" title="Botões" />
          <Card>
            <div className="app__stack-7">
              <div>
                <p className="app__label app__label--lg">Variantes</p>
                <div className="app__row">
                  <Button variant="primary">Primário</Button>
                  <Button variant="secondary">Secundário</Button>
                  <Button variant="danger">Perigo</Button>
                  <Button variant="success">Sucesso</Button>
                  <Button variant="purple">Roxo</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              <div>
                <p className="app__label app__label--lg">Tamanhos</p>
                <div className="app__row--center">
                  <Button size="sm">Pequeno</Button>
                  <Button size="md">Médio</Button>
                  <Button size="lg">Grande</Button>
                </div>
              </div>
              <div>
                <p className="app__label app__label--lg">Com ícone</p>
                <div className="app__row">
                  <Button variant="primary">
                    <span className="app__icon-label">
                      <Star size={15} /> Favoritar
                    </span>
                  </Button>
                  <Button variant="secondary">
                    <span className="app__icon-label">
                      <Zap size={15} /> Turbo
                    </span>
                  </Button>
                  <Button variant="danger">
                    <span className="app__icon-label">
                      <X size={15} /> Deletar
                    </span>
                  </Button>
                  <Button variant="success">
                    <span className="app__icon-label">
                      <Check size={15} /> Confirmar
                    </span>
                  </Button>
                  <Button variant="ghost">
                    <span className="app__icon-label">
                      <Sparkles size={15} /> Mágico
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 04 — CARDS */}
        <section>
          <SectionTitle number="04" title="Cards" />
          <div className="app__card-grid">
            <Card rotation={-1.2} accent={YELLOW}>
              <div className="app__card-body">
                <Badge variant="primary">Novo</Badge>
                <h3 className="app__card-title">Herói da Ação</h3>
                <p className="app__card-text">
                  Personagem com habilidades especiais e poderes extraordinários
                  para missões impossíveis.
                </p>
                <Button size="sm" variant="primary">
                  Ver mais
                </Button>
              </div>
            </Card>

            <Card rotation={0.6} accent={BLUE}>
              <div className="app__card-body">
                <Badge variant="secondary">Em andamento</Badge>
                <h3 className="app__card-title">Missão Secreta</h3>
                <p className="app__card-text">
                  Infiltração de alto risco no quartel general inimigo. Risco
                  máximo, recompensa máxima.
                </p>
                <div>
                  <Progress value={42} variant="secondary" />
                </div>
              </div>
            </Card>

            <Card rotation={-0.5} accent={GREEN}>
              <div className="app__card-body">
                <div className="app__card-header-row">
                  <Badge variant="success">Completo</Badge>
                  <Heart size={20} className="app__heart-icon" />
                </div>
                <h3 className="app__card-title app__card-title--tight">
                  Operação Vitória
                </h3>
                <p className="app__card-text">
                  Missão cumprida com sucesso. Todos os objetivos alcançados.
                  Retorno ao quartel base.
                </p>
                <Button size="sm" variant="success">
                  <span className="app__icon-label app__icon-label--tight">
                    <Check size={14} /> Concluído!
                  </span>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* 05 — BADGES */}
        <section>
          <SectionTitle number="05" title="Badges" />
          <Card>
            <div className="app__stack-4">
              <div>
                <p className="app__label app__label--lg">Variantes</p>
                <div className="app__row">
                  <Badge variant="primary">Destaque</Badge>
                  <Badge variant="secondary">Info</Badge>
                  <Badge variant="danger">Crítico</Badge>
                  <Badge variant="success">Sucesso</Badge>
                  <Badge variant="purple">Beta</Badge>
                  <Badge variant="neutral">Neutro</Badge>
                </div>
              </div>
              <div>
                <p className="app__label app__label--lg">Em contexto</p>
                <div className="app__row--gap4">
                  <span className="app__inline-text">
                    Personagem <Badge variant="primary">Novo</Badge>
                  </span>
                  <span className="app__inline-text">
                    Status <Badge variant="success">Ativo</Badge>
                  </span>
                  <span className="app__inline-text">
                    Versão <Badge variant="neutral">v2.4</Badge>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 06 — INPUTS */}
        <section>
          <SectionTitle number="06" title="Formulários" />
          <Card>
            <div className="app__form-grid">
              <Input label="Nome do herói" placeholder="Ex: Peter Parker" />
              <Input
                label="Superpoder"
                placeholder="Ex: Aranha, força, velocidade"
              />
              <Input
                label="Email"
                placeholder="heroi@universo.com"
                type="email"
              />
              <Input
                label="Senha secreta"
                placeholder="••••••••"
                type="password"
              />
              <Select
                label="Power Class"
                options={[
                  "S-Class — Universe Level",
                  "A-Class — City Level",
                  "B-Class — Street Level",
                  "C-Class — Support",
                ]}
              />
            </div>
            <div className="app__form-actions">
              <Button variant="primary">
                <span className="app__icon-label">
                  <Shield size={15} /> Cadastrar herói
                </span>
              </Button>
              <Button variant="ghost">Cancelar</Button>
            </div>
          </Card>
        </section>

        {/* 07 — ALERTAS */}
        <section>
          <SectionTitle number="07" title="Alertas" />
          <div className="app__stack-3">
            <Alert
              variant="info"
              title="Nova missão disponível!"
              onDismiss={() => null}
            >
              Setor norte precisa de reforços. Confirme disponibilidade até as
              18h de hoje.
            </Alert>
            <Alert variant="warning" title="Atenção, herói!">
              Combustível do jato abaixo de 30%. Reabasteça antes da próxima
              missão.
            </Alert>
            <Alert variant="danger" title="PERIGO MÁXIMO!">
              Intruso detectado no perímetro. Acione o protocolo de segurança
              imediatamente!
            </Alert>
            <Alert variant="success" title="Missão cumprida!">
              Todos os objetivos completados. Retorno seguro ao quartel.
              Parabéns, herói!
            </Alert>
          </div>
        </section>

        {/* 08 — BALÕES */}
        <section>
          <SectionTitle number="08" title="Balões de Fala" />
          <div className="app__bubble-stack">
            <div className="app__bubble-row">
              <div className="app__avatar" style={{ backgroundColor: BLUE }}>
                H
              </div>
              <div className="app__bubble-wrap app__bubble-wrap--rotate-neg">
                <SpeechBubble direction="left">
                  <p className="app__bubble-text">
                    Com grandes poderes vêm grandes responsabilidades!
                  </p>
                </SpeechBubble>
              </div>
            </div>

            <div className="app__bubble-row app__bubble-row--reverse">
              <div className="app__avatar" style={{ backgroundColor: RED }}>
                V
              </div>
              <div className="app__bubble-wrap app__bubble-wrap--rotate-pos">
                <SpeechBubble direction="right" bg="bg-[#FCD12A]">
                  <p className="app__bubble-text">
                    Isso é o que eles todos dizem... antes de perder para mim!
                  </p>
                </SpeechBubble>
              </div>
            </div>

            <div className="app__bubble-row">
              <div className="app__avatar" style={{ backgroundColor: GREEN }}>
                A
              </div>
              <div className="app__bubble-wrap app__bubble-wrap--sm">
                <SpeechBubble direction="left" bg="bg-[#0D0D0D]">
                  <p className="app__bubble-text">
                    Eu prefiro ação a palavras. Vamos lá!
                  </p>
                </SpeechBubble>
              </div>
            </div>
          </div>
        </section>

        {/* 09 — CONTROLES */}
        <section>
          <SectionTitle number="09" title="Controles" />
          <div className="app__controls-grid">
            <Card>
              <p className="app__label app__label--panel">Toggles</p>
              <div className="app__stack-5">
                <Toggle
                  checked={toggleA}
                  onChange={() => setToggleA(!toggleA)}
                  label="Modo Herói"
                />
                <Toggle
                  checked={toggleB}
                  onChange={() => setToggleB(!toggleB)}
                  label="Poderes Ativados"
                />
                <Toggle
                  checked={toggleC}
                  onChange={() => setToggleC(!toggleC)}
                  label="Modo Invisível"
                />
              </div>
              <div className="app__panel-footer">
                <p className="app__panel-footer-text">
                  Estado atual:{" "}
                  {[
                    toggleA && "Herói",
                    toggleB && "Poderes",
                    toggleC && "Invisível",
                  ]
                    .filter(Boolean)
                    .join(", ") || "Nenhum ativo"}
                </p>
              </div>
            </Card>

            <Card>
              <p className="app__label app__label--panel">
                Barras de Progresso
              </p>
              <div className="app__stack-4">
                <Progress
                  value={power}
                  variant="primary"
                  label="Nível de Poder"
                />
                <Progress value={75} variant="success" label="Saúde" />
                <Progress value={32} variant="danger" label="Energia" />
                <Progress value={88} variant="secondary" label="Escudo" />
                <div className="app__progress-actions">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setPower(Math.max(0, power - 10))}
                  >
                    − 10
                  </Button>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setPower(Math.min(100, power + 10))}
                  >
                    + 10
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => setPower(0)}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 10 — Avatar/Tooltips */}
        <section>
          <div className="app__bubble-stack">
            <SectionTitle number="10" title="Avatar/Tooltips" />

            <Card>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 24,
                  alignItems: "flex-end",
                }}
              >
                {[
                  { in: "SM", name: "Spider-Man", i: 0 },
                  { in: "ST", name: "Storm", i: 1 },
                  { in: "WV", name: "Wolverine", i: 3 },
                  { in: "IM", name: "Iron Man", i: 2 },
                  { in: "CA", name: "Captain America", i: 4 },
                ].map((a) => (
                  <div
                    key={a.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Tooltip tip={a.name}>
                      <Avatar initials={a.in} index={a.i} size={56} />
                    </Tooltip>
                    <span
                      style={{
                        fontFamily: "Bangers, cursive",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {a.in}
                    </span>
                  </div>
                ))}
                <p
                  style={{
                    fontFamily: "Comic Neue, cursive",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "#888",
                    alignSelf: "center",
                    marginLeft: 8,
                  }}
                >
                  ← hover for names
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="app__footer">
        <Halftone
          className="inset-0 w-full h-full"
          color={YELLOW}
          opacity={0.05}
          size={14}
        />
        <div className="app__footer-inner">
          <div>
            <div className="app__footer-brand">INK UI</div>
            <p className="app__footer-tagline">
              Design system · Estilo Quadrinhos
            </p>
          </div>
          <div className="app__footer-center">
            <p className="app__footer-credit">Feito com tinta e paixão</p>
            <p className="app__footer-copy">© 2026 · MIT License</p>
          </div>
          <div className="app__footer-links">
            {["Docs", "GitHub", "NPM", "Figma"].map((l) => (
              <a key={l} href="#" className="app__footer-link">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
