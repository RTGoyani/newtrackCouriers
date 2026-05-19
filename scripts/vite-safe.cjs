const child_process = require("child_process");
const path = require("path");

const originalExec = child_process.exec;
const originalExecFile = child_process.execFile;
const originalSpawn = child_process.spawn;

function createNoopChildProcess() {
  const noop = () => {};
  return {
    stdout: { on: noop },
    stderr: { on: noop },
    on: noop,
    kill: noop,
    pid: null,
  };
}

function handleExecError(error, callback) {
  if (callback) {
    process.nextTick(() => callback(error, "", ""));
  }
  return createNoopChildProcess();
}

function safeExec(...args) {
  const callback = typeof args[args.length - 1] === "function" ? args.pop() : undefined;
  try {
    return originalExec.apply(child_process, args.concat(callback));
  } catch (error) {
    if (error && error.code === "EPERM") {
      return handleExecError(error, callback);
    }
    throw error;
  }
}

function safeExecFile(...args) {
  const callback = typeof args[args.length - 1] === "function" ? args.pop() : undefined;
  try {
    return originalExecFile.apply(child_process, args.concat(callback));
  } catch (error) {
    if (error && error.code === "EPERM") {
      return handleExecError(error, callback);
    }
    throw error;
  }
}

function safeSpawn(...args) {
  try {
    return originalSpawn.apply(child_process, args);
  } catch (error) {
    if (error && error.code === "EPERM") {
      return createNoopChildProcess();
    }
    throw error;
  }
}

child_process.exec = safeExec;
child_process.execFile = safeExecFile;
child_process.spawn = safeSpawn;

const viteBin = path.resolve(__dirname, "../node_modules/vite/bin/vite.js");
require(viteBin);
