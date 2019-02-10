       // --1-- gpo --
        function gpo(obj) {
            return Object.getPrototypeOf(obj)
        }
        Object.defineProperty(gpo, 'info', {
            get: function () {
                return `gpo --> getPrototypeOf (more info: gpo.src)`
            }
        })
        Object.defineProperty(gpo, 'src', {
            get () { return `${String(gpo)}`}
        })

        // --2-- c -- 
        function c(...a) {
            for (i of a) {
                console.log(i);
            }
        }

        Object.defineProperty(c, 'info', {
            get () {
                return `c --> console.log(a,b,c, ...).  more info with c.src `
            }
        })

        Object.defineProperty(c, 'src', {
            get () {
                return String(c)
            }
        })

        // --3-- gopnames --
        function gopnames(obj) {
            return Object.getOwnPropertyNames(obj);
        }

        Object.defineProperty(gopnames, 'info', {
            get () {
                return `gopnames --> getOwnPropertyNames (more info: gopnames.src)`
            }
        })

        Object.defineProperty(gopnames, 'src', {
            get () {
            return String(gopnames);
            }
        })

