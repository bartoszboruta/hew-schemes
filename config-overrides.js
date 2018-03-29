module.exports = (config, env) => {
    if (process.env.NODE_ENV === 'production') {
        config.output.libraryTarget = 'umd';
        config.output.library = 'Ekontrol';
    }

    return config
}