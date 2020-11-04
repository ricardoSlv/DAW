<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
        <xsl:template match="/">
            <xsl:result-document href="index.html">
                <html>
                    <head>
                        <title>Catalogo de publicação de JCR</title>
                    </head>
                    <body>
                        <h2>Catalogo de pubs de JCR</h2>
                        <ul>
                            <xsl:apply-templates select="bibliography/*[not(year=preceding::year)]">
                                <xsl:sort select="year" data-type="number" order="descending"></xsl:sort>
                            </xsl:apply-templates>
                        </ul>
                    </body>
                </html>
            </xsl:result-document>
            <xsl:apply-templates mode="singlepages"/>
        </xsl:template>
    
    <xsl:template match="bibliography/*" mode="singlepages">
        <xsl:result-document href="site/{@id}.html">
            <html>
                <head>
                    <title>
                        <xsl:value-of select="@id"/>
                    </title>
                </head>
                <body>
                    <h2>
                        <xsl:value-of select="title"/>
                        <dl>
                            <xsl:for-each select="*">
                                <dt><xsl:value-of select="name(.)"/></dt>
                                <dd><xsl:value-of select="."/></dd>
                            </xsl:for-each>
                        </dl>
                        <address>
                            [<a href="index.html">Return to index</a>]
                        </address>
                    </h2>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="bibliography/*">
        <xsl:variable name="y" select="year"/>
        <li>
           <xsl:apply-templates select="/bibliography/*[year=$y]" mode="subindex">
               <xsl:sort select="title"/>
           </xsl:apply-templates>
        </li>
    </xsl:template>
    
    <xsl:template match="bibliography/*" mode="subindex">
        <li>
            <a href="site/{@id}.html">
                <xsl:value-of select="title"/>
            </a>
        </li>
    </xsl:template>
            
</xsl:stylesheet>