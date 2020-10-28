<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Poema de Álvaro de Campos</title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="titulo">
        <h2>
            <xsl:value-of select="."/>
        </h2>
    </xsl:template>

    <xsl:template match="autor">
        <h3>
            <xsl:value-of select="."/>
        </h3>
    </xsl:template>
    
    <xsl:template match="quadra|terceto">
        <div style="display:block; margin:30px; font-family:sans-serif;">
            <xsl:apply-templates/>
        </div>
    </xsl:template> 
    
    <xsl:template match="verso">
        <xsl:apply-templates/>
        <br/>
    </xsl:template>
    
    <xsl:template match="local|nome">
        <span style="color:red;">
            <xsl:value-of select="."/>
        </span>
    </xsl:template> 
    
    <xsl:template match="data">
        <span style="color:blue;">
            <xsl:value-of select="."/>
        </span>
    </xsl:template> 

</xsl:stylesheet>