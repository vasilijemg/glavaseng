$ErrorActionPreference = "Stop"

Push-Location $PSScriptRoot
try {
    npm run build
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed with exit code $LASTEXITCODE."
    }

    scp -r .\dist\* root@104.248.23.93:/var/www/glavasengineering/
    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed with exit code $LASTEXITCODE."
    }
} finally {
    Pop-Location
}
