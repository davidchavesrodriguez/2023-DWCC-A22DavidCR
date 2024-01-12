// ¿Son iguais os seguintes fragmentos de código?
// ¿Que pasa se se produce un erro en f1?
// promise.then(f1).catch(f2);
// promise.then(f1, f2);

// Non son iguais. En caso de producirse un erro en f1 só
// se recollería co catch, non con f2