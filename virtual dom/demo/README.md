# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 24-11-2025

## state managment:

jevha aapan onClick karto tevha set vaable mhanje ki count aani set method mhanje ki setCount la call jato aani useState chya help ne setCount click kel ki lagech demo la call kart aani tyachi state change kart.

set variable update zal ki component la prt aikda call jato.

aani jr aaplyala set variable sarkh sarkh increase karayach asel tr tr aapan simply set variable + 1 he use karun karu shakto pn jevha aapan olClick vr click karel tevha cha ha senario asel.
Anni fkt aikdach state change karayachi asel tr simply aapan setCount(1) he use karu shakto karan bydefault count variable madhe 0 hot.

# virtual dom

jya veles aapan state change karto tya tya veles tyache 2 dom create hotat 
tyatla aik asto virtual dom aani dusra asto real dom.
Real dom to dom jo aaplyala browser vr disto 
Virtual dom internally create hoto.

aani jya jya veles component re-render karto tya tya veles ajun aik virtual dom banato aani aata jo latest vala virual dom aani previous vala virtual dom asto tya madhe comparison hot aani jr kahi changes asel tr tya specific element madhe te change krt mhajech ki akha ui double create nahi hot fkt jya element madhe change aahe te element double create hot.

jya jya veles component la call jato tya tya veles aik vertual dom banato aani fkt latest aani tyacha previous madhe comparison hot old vale dom vanish houn jatat.

jya veles aapan first time code run karto tevha tithe 2 dom create hotat 1 real dom aani 1 virtual dom asto aani jya veles aapan component re-render kel tr fkt virtual dom double create hoto real nahi.

virtual dom is a light weight copy of a real dom that react use to update the UI faster.

previous vertual dom aani letest virtual dom madhe je comparison hot tyala diffinct mhantat.
aani virstual dom aani real dom madhe je comparison hot tyala reconsolation mhantat.
