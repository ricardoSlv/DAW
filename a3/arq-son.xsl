<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Arquivo Sonoro EVO</title>
            </head>
            <body>
                <h2>Aquivo Sonor Evo</h2>
                <table border="1" width="100%">
                    <tr>
                        <td width="30%" valign="top">
                            <h3>Indice de Musicas</h3>
                            <ol>
                                <xsl:apply-templates select="//doc" mode="indice">
                                    <xsl:sort select="tit"></xsl:sort>
                                </xsl:apply-templates>
                            </ol>
                        </td>
                        <td>
                                <xsl:apply-templates />
                        </td>
                    </tr>
                </table>

            </body>
        </html>
    </xsl:template>

    <xsl:template match="doc" mode="indice">
        <li>
            <a name="i{generate-id()}"></a>
            <a href="#{generate-id()}">
                <xsl:value-of select="tit"/>
            </a>
        </li>
    </xsl:template>
    
    <xsl:template match="doc">
        <a name="{generate-id()}"/>
        <p><b>Titulo:</b> <xsl:value-of select="tit"/></p>
        <p><b>Provincia:</b> <xsl:value-of select="prov"/></p>
        <p><b>Local:</b> <xsl:value-of select="local"/></p>
        <p><b>Instrumento:</b> <xsl:value-of select="inst"/></p>
        <p><b>Duração:</b> <xsl:value-of select="duracao"/></p>
        <address>
            [<a href="#i{generate-id()}">Voltar ao indice</a>]
        </address>
        <center > <hr width="80%"></hr></center>
    </xsl:template>



</xsl:stylesheet>