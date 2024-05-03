const commands = [

    {
        command: "ls",
        info: "You can use the `ls` command to list files in a directory. For example, `ls` will list all files and directories in the current directory."
    },
    {
        command: "mkdir",
        info: " The `mkdir` command is used to create a new directory in Linux. For instance, `mkdir my_directory` will create a directory named my_directory in the current location."
    },
    {
        command: "cd",
        info: "You can use the `cd` command followed by the directory path to navigate to a different directory. For example, `cd /path/to/directory` will change your current directory to directory within the specified path."
    },
    {
        command: "cp",
        info: "The `cp` command is used to copy files in Linux. For instance, `cp file1.txt file2.txt` will create a copy of file1.txt named file2.txt in the current directory."
    },
    {
        command: "mv",
        info: "The `mv` command is used to move files or directories in Linux. For example, `mv file1.txt /path/to/new/location` will move file1.txt to the specified location."
    },
]

const terminal = document.getElementById('terminal');

const infoElement = document.getElementById("info")

terminal.innerHTML = "user@linux:-$"

function writeToTerminal(text) {
    terminal.innerHTML += ""
    terminal.innerHTML += `<div>  <div> ${text}</div></div> `
}

function processCommand(command) {

    let found = commands.find(cmd => cmd.command == command)
    let output
    if (found) {
        output = ` showing "${command}" command result`
        infoElement.innerHTML += `<div>${found.info}</div> <div>------</div>`
    } else {
        output = `command not found`
    }
    return output

}

function handleInput(input) {
    const command = input.value;
    terminal.innerHTML += ` ${command}`;
    input.value = '';
    const output = processCommand(command);
    if (output) {
        writeToTerminal(output);
    }
    terminal.innerHTML += "user@linux:-$"
    const newInput = createInputField();
    terminal.appendChild(newInput);
    newInput.focus();
}


function createInputField() {

    const input = document.createElement('input');
    input.type = 'text';
    input.autofocus = true;
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleInput(input);
        }
    });
    return input;
}

const initialInput = createInputField();
terminal.appendChild(initialInput);
