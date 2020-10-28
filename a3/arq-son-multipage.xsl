<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <xsl:result-document href="site/index.html">

            <html>
                <head>
                    <title>Arquivo Sonoro EVO</title>
                </head>
                <body>
                    <h2>Aquivo Sonor Evo</h2>

                    <h3>Indice de Musicas</h3>
                    <ol>
                        <xsl:apply-templates select="//doc" mode="indice">
                            <xsl:sort select="tit"></xsl:sort>
                        </xsl:apply-templates>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="doc" mode="indice">
        <li>
            <a name="i{generate-id()}"></a>
            <a href="{generate-id()}.html">
                <xsl:value-of select="tit"/>
            </a>
        </li>
    </xsl:template>

    <xsl:template match="doc">
        <xsl:result-document href="site/{generate-id()}.html">

            <html>
                <head>
                    <title>Arquivo Sonoro EVO</title>
                </head>
                <body>
                    <p>
                        <b>Titulo:</b>
                        <xsl:value-of select="tit"/>
                    </p>
                    <p>
                        <b>Provincia:</b>
                        <xsl:value-of select="prov"/>
                    </p>
                    <p>
                        <b>Local:</b>
                        <xsl:value-of select="local"/>
                    </p>
                    <p>
                        <b>Instrumento:</b>
                        <xsl:value-of select="inst"/>
                    </p>
                    <p>
                        <b>Duração:</b>
                        <xsl:value-of select="duracao"/>
                    </p>
                    <address>
                        [<a href="index.html#i{generate-id()}">Voltar à Home</a>]
                    </address>
                </body>
            </html>
            
        </xsl:result-document>
    </xsl:template>



</xsl:stylesheet>