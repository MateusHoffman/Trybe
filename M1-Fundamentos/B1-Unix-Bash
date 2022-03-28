# Bloco 01: Unix & Bash

- Unix é um sistema operacional **multitarefa** e **multiutilizador**
- Quase tudo no Unix é tratado com arquivo
***
- O sistema Unix consiste em Núcleo e Programas de sistema
- **Núcleo**:É a única parte que relaciona-se diretamente com o hardware
	- Agenda processos
	- Gerencia memória
	- Controla o acesso a arquivos
	- Controla o acesso a dispositivos de hardware
- **Programas de sistema**:*São aplicações que fazem interface entre o usuário e o núcleo
	- Shell (Ambiente que permite o usuário a gdigitar comandos)
	- Programas utilitários (Programa usado para manipular arquivos, controlar processos etc.)
	- Ambiente gráfico (Para facilitar a interaçao do usuário com o sistema)	
***
- **Processos**: 
	- Processo é uma instância de um programa em execução
	- Um programa, para ser executado, deve ser carregado na memória
	- Cada processo possui sui identificação (PID)
***
- **Sistema de arquivos**: 
	- Os arquivos são contidos em diretórios (pastas)
	- O diretório inicial é o `/` chamado de raiz
***
- **Estrutura de diretórios**: 
	- A árvore de diretórios do Unix é dividida em várias ramificações menores
	- Os diretórios mais comuns são os seguintes:
		- `/` - Diretório raiz - este é o diretório principal do sistema
		- `/bin` - Contém arquivos, programas do sistema, que são usados com freqüência pelos usuários.
		- `/boot` - Contém arquivos necessários para a inicialização do sistema.
		- `/dev` - Contém arquivos usados para acessar dispositivos (periféricos) existentes no computador.
		- `/etc` - Arquivos de configuração de seu computador local.
		- `/home` - Diretórios contendo os arquivos dos usuários.
		- `/lib` - Bibliotecas compartilhadas pelos programas do sistema e módulos do núcleo.
		- `/proc` - Sistema de arquivos do núcleo. Este diretório não existe no disco rígido, ele é colocado lá pelo núcleo e usado por diversos programas.
		- `/root` - Diretório do usuário root.
		- `/tmp` - Diretório para armazenamento de arquivos temporários criados por programas.
		- `/usr` - Contém maior parte de seus programas. Normalmente acessível somente como leitura.
		- `/var` - Contém maior parte dos arquivos que são gravados com freqüência pelos programas do sistema.
***
### Atalhos Globais
- **Ctrl + C **(Cancela o comando atual em funcionamento.)
- **Ctrl + Z **(Pausa o comando atual)
- **Ctrl + D** (Sai da sessão)
- **Ctrl + W **(Apaga a última palavra escrita)
- **Ctrl + U **(Apaga a linha inteira)
***
### Dicas úteis para o aprendizado
- **`command --help`** (Mostra uma descrição detalhada do comando)
- **`man command` **(Mostra uma descrição detalhada do comando)
- **`apropos keyword`** (Mostra todos os comandos que possui a palavra-chave especificada)

### Comandos de manipulação de diretório
- `ls` (Lista arquivos/diretórios do diretório atual)
- `ls -a` (Lista arquivos/diretórios OCULTO do diretório atual)
- `ls -l` (Lista arquivos/diretórios do diretório atual com detalhes sobre eles)
***
- `cd xxx` (Muda do diretório atual para o xxx)
- `cd` (Muda para o diretório /home (arquivos pessoais).)
- `cd ..` (Muda do diretório atual para o diretório anterior)
***
- `pwd` (Exibe o caminho do diretório atual.)
***
- `mkdir` (Cria um diretório especificado )
- `mkdir -p /xxx/yyy/zzz` (Cria uma árvore de diretório. (Um diretório dentro do outro))
***
- `rm xxx` (Apaga o arquivo xxx)
- `rm -r` (Apaga o diretório especificado)
- `rm -f` (Apaga o arquivo/diretório especificado forçadamente (-f de force))
***
- `cp -r x1.txt x2.txt` (Copia o “x1.txt” e coloca o nome de “x2.txt”)
***
- `mv x1 x2` (DUAS FUNÇÕES: renomear x1 para x2 OU mover x1 para x2)
***
- `touch xxx` (Cria ou atualiza o arquivo xxx)
***
- `cat > xxx` (Cria ou sobrescreve o arquivo xxx)
- `cat >> xxx` (Cria e/ou adiciona conteúdo ao arquivo xxx)
- `cat xxx` (Exibe o conteúdo do arquivo xxx)
***
- `less file1` (Exibe o conteúdo do arquivo em forma de paginação)
***
- `sort` (Serve para ordenar os valores em ordem alfabética apenas no terminal)
***
- `head xxx` (Exibe as primeiras 10 linhas de um arquivo xxx)
- `head -3 xxx` (Exibe as primeiras 3 linhas de um arquivo xxx)
- `tail xxx` (Exibe as últimas 10 linhas de um arquivo xxx)
- `tail -5 xxx` (Exibe as últimas 5 linhas de um arquivo xxx)
***
- `find path -name file1` (Busca de um arquivo/diretório de algum path que possui o nome file1)
***
- `grep Nov xxx` (Procura as palavras “Nov” no arquivo xxx)
- `grep [0-9] xxx` (Seleciona todas as linhas no arquivo xxx que contêm números)
***
- `ps` (Exibe os processos dos usuários ativos em tempo real)
- `top` (Exibe todos os processos rodando em tempo real (Gerenciador de tarefas))
- `kill PID` (Mata um processo específico pelo número PID)
- `killall xxx` (Mata todos os processos com o nome especificado xxx)
- `bg` (Lista trabalhos parados ou em segundo plano, ou pode continua-los também.)
- `fg` (Traz o trabalho mais recente para o primeiro plano.)
- `chmod octal xxx` (Muda as permissões do arquivo xxx para octal)
	- octal:
	- Proprietário, Grupo e Outros
	- 4 - (r = read)
	- 2 - (w = write)
	- 1 - (x = execute)
	- Ex: `chmod 764 xxx` (O xxx terá "rwx" para proprietário, "rw" para grupo e "r" para outros)
***
- `shutdown -h now` (Desliga o sistema agora)
- `shutdown -r now` (Reinicia o sistema agora)
***
- `apt-get update` (Atualiza a lista de pacotes.)
- `apt-get upgrade` (Atualiza todos os pacotes instalados.)
- `apt-get check` (Verifica se as resoluções das dependências estão corretas.)
- `apt-get clean` (Limpa o cache de pacotes baixados.)
***
### Operadores do Unix (string operators)
- `&` (Serve para deixar um processo rodando em background sem consumir o terminal)
- `;` (Possibilita a execução de vários comandos de uma só vez e a execução do comando ocorre sequencialmente.)
- `&&` (A execução do segundo comando só é realizade, se a execução do primeiro comando for Sucesso)
- `||` (A execução do segundo comando só é realizade, se a execução do primeiro comando for Falhado)
- `|` (A saída do primeiro comando atua como uma entrada para o segundo comando.)
- `>` (Serve para criar/sobrescrever o conteúdo de um arquivo já existente)
- `>>` (Serve para adicionar novo conteúdo ao arquivo já existente)
