// Durante a aula de hoje, vimos que o
// processo para que os arquivos escritos
// em Typescript, com sua extensão .ts
// passam por um processo para que possam ser
// lidos e executados. Este processo é chamado
// de transpilação. Fazendo isso, o código será
// transformado em Javascript e assim poderá ser
// lido e interpretado.

// Sabendo disso, vamos entender um pouco melhor
// o processo de transpilação.

// Durante a aula, a biblioteca typescript foi instalada

// npm install typescript -g ## -g ou --global para indicar
// indicação global

// Com isso temos acesso ao comando tsc no terminal.
//  O tsc é o comando responsável por fazer a transpilação
//  dos arquivos.

//  Abaixo, há um exemplo de código escrito em Typescript.
//  Crie um arquivo com este código chamado exercicio-4.ts
//  e use comentários para responder as questões.

//  a) Como você faria, já com a extensão instalada,
//  para gerar um arquivo javascript a partir do
//  arquivo typescript com o código abaixo?

//  type pokemon {
// 	name: string,
//   types: string,
// 	healthPoints: number
// }

// const pokemon1: pokemon = {
//   name: "Charmander",
//   types: "Fire",
//   healthPoints: 28
// }

// const pokemon2: pokemon = {
//   name: "Bulbasaur",
//   types: "Grass/Poison",
//   healthPoints: 31
// }

// const pokemon2: pokemon = {
//   name: "Squirtle",
//   types: "Water",
//   healthPoints: 35
// }

// b) E se este arquivo estivesse dentro de uma
// pasta chamada src. O processo seria diferente?
// Se sim, descreva as diferenças.

// c) Existe alguma maneira de transpilar múltilplos
// arquivos de uma vez só? Caso conheça, explique como
// fazer.

// Dicas:
// a) o comando tsc seguido do nome do arquivo executa
//  a transpilação de arquivos.

//  b) Esse comando funciona de forma parecida com o cd
//  do terminal, então podemos descrever não apenas nomes
//  de arquivo, mas também seus caminhos.

//  c) Crie outros arquivos .ts na pasta. Podemos rodar o
//  comando tsc para transpilar vários arquivos ao colocar
//  seus nomes separados por um espaço.

//  tsc arquivo1.ts arquivo2.ts arquivo3.ts

//  Ou ainda, o comando tsc sem parâmetros, que converte todos
//  os arquivos com a extensão .ts que encontrar.

//  O comando tsc --init pode ser executado no terminal para
//  gerar um arquivo tsconfig.json na pasta em que estamos.
//  Quando esse arquivo é gerado, ele traz uma série de
//  parâmetros de transpilação. Execute este comando na
//  pasta em que está agora, e abra o arquivo. Ele será
//  algo parecido com isso:

//  {
//     "compilerOptions": {
//       /* Basic Options */
//       // "incremental": true,                   /* Enable incremental compilation */
//       "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
//       "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
//       // "lib": [],                             /* Specify library files to be included in the compilation. */
//       // "allowJs": true,                       /* Allow javascript files to be compiled. */
//       // "checkJs": true,                       /* Report errors in .js files. */
//       // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
//       // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
//       // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
//       // "sourceMap": true,                     /* Generates corresponding '.map' file. */
//       // "outFile": "./",                       /* Concatenate and emit output to single file. */
//       // "outDir": "./",                        /* Redirect output structure to the directory. */
//       // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
//       // "composite": true,                     /* Enable project compilation */
//       // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
//       // "removeComments": true,                /* Do not emit comments to output. */
//       // "noEmit": true,                        /* Do not emit outputs. */
//       // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
//       // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
//       // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

//       /* Strict Type-Checking Options */
//       "strict": true,                           /* Enable all strict type-checking options. */
//       // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
//       // "strictNullChecks": true,              /* Enable strict null checks. */
//       // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
//       // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
//       // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
//       // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
//       // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

//       /* Additional Checks */
//       // "noUnusedLocals": true,                /* Report errors on unused locals. */
//       // "noUnusedParameters": true,            /* Report errors on unused parameters. */
//       // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
//       // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

//       /* Module Resolution Options */
//       // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
//       // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
//       // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
//       // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
//       // "typeRoots": [],                       /* List of folders to include type definitions from. */
//       // "types": [],                           /* Type declaration files to be included in compilation. */
//       // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
//       "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
//       // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
//       // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

//       /* Source Map Options */
//       // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
//       // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
//       // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
//       // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

//       /* Experimental Options */
//       // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
//       // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

//       /* Advanced Options */
//       "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
//     }
//   }

//   d) Compare esse arquivo com o que criamos durante
//   a aula (ele está disponível na área de configuração
//     do projeto ali em cima). Leia as descrições sobre
//     cada uma das propriedades. Alguma configuração que
//     chamou sua atenção? O que mudou em comparação com o
//     arquivo criado pelos slides?
