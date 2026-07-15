$headers = @{ "User-Agent" = "Mozilla/5.0" }

$imgs = [ordered]@{
  "public/images/practice-areas/corporate-law.jpg"          = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80"
  "public/images/practice-areas/litigation.jpg"             = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80"
  "public/images/practice-areas/real-estate.jpg"            = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
  "public/images/practice-areas/family-law.jpg"             = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
  "public/images/practice-areas/intellectual-property.jpg"  = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
  "public/images/practice-areas/employment-law.jpg"         = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
  "public/images/insights/fintech-regulatory-landscape-2024.jpg"           = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80"
  "public/images/insights/environmental-compliance-nigerian-industrial.jpg" = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80"
  "public/images/insights/protecting-digital-innovations-generative-ai.jpg" = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80"
  "public/images/insights/structured-finance-trends-private-debt.jpg"      = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80"
  "public/images/insights/arbitration-vs-litigation-disputes.jpg"          = "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=80"
  "public/images/insights/mixed-use-development-frameworks.jpg"            = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
  "public/images/insights/cross-border-regulatory-evolution-2024.jpg"      = "https://images.unsplash.com/photo-1569025591987-2a203cca8b7c?w=900&q=80"
  "public/images/insights/global-minimum-tax-multinationals-sub-saharan.jpg" = "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80"
}

foreach ($path in $imgs.Keys) {
  $url = $imgs[$path]
  Write-Host "Downloading $path ..."
  Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -UseBasicParsing
}

Write-Host "All done."
